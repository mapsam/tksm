import type { NextApiRequest, NextApiResponse } from 'next';
import type { sheets_v4, Auth } from 'googleapis';
import type { ValidationResult } from 'joi';

import { google } from 'googleapis';
import crypto from 'crypto';
import { validateRegistryBody, log } from '../../../lib/api';

const sheets: sheets_v4.Sheets = google.sheets('v4');

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const requestId = crypto.randomBytes(4).toString('hex');
  log(req, requestId);

  // set up google client
  const auth: Auth.GoogleAuth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    projectId: process.env.GCLOUD_PROJECT,
    credentials: {
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_email: process.env.GOOGLE_CLIENT_EMAIL
    }
  });

  // append registry item to spreadsheet
  if (req.method === 'POST') {
    // validate body
    const validated: ValidationResult = validateRegistryBody(req.body);
    if (validated.error) {
      return res.status(400).json({ errors: validated.error });
    }

    // append row
    try {
      const submittedTime = (new Date()).toISOString();
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        valueInputOption: 'USER_ENTERED',
        range: 'REGISTRY',
        auth,
        requestBody: {
          values: [[
            validated.value.name,
            validated.value.item,
            validated.value.amount,
            validated.value.method,
            submittedTime,
            requestId,
            JSON.stringify(req.body),
            JSON.stringify(req.headers)
          ]]
        }
      });
    } catch (err) {
      console.log(`[${requestId}] ERROR`, err);
      return res.status(500).json({ errors: ['Uh oh, something went wrong. Send Sam an email at matthews.sam@gmail.com or text 651-343-6555!'] })
    }

    return res.json({ data: 'ok' });

  // get registry summary in simple key value structure
  } else if (req.method === 'GET') {
    const goals = (await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      valueRenderOption: 'UNFORMATTED_VALUE',
      range: 'REGISTRY_SUM',
      auth,
    })).data.values.slice(1).reduce((memo, row) => {
      memo[row[0]] = row[3];
      return memo;
    }, {});

    return res.json({ data: goals });
  } else {
    return res.status(400).json({ message: `This API does not support ${req.method} requests.` });
  }
}