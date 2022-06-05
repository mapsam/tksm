import type { NextApiRequest, NextApiResponse } from 'next';
import type { sheets_v4, Auth } from 'googleapis';

import { google } from 'googleapis';
import { validateRequestBody, log } from '../../../lib/api';
import { APIErrors } from '../../../lib/types';

const sheets: sheets_v4.Sheets = google.sheets('v4');

export default async function (req: NextApiRequest, res: NextApiResponse) {
  log(req);

  // append RSVP to spreadsheet
  if (req.method === 'POST') {
    // validate body
    const errors: APIErrors[] = validateRequestBody(req.body);
    if (errors.length) return res.status(400).json({ errors });

    // set up google client
    const auth: Auth.GoogleAuth = new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      projectId: process.env.GCLOUD_PROJECT,
      credentials: {
        private_key: process.env.GOOGLE_PRIVATE_KEY,
        client_email: process.env.GOOGLE_CLIENT_EMAIL
      }
    });

    // append row
    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        valueInputOption: 'USER_ENTERED',
        range: 'RAW',
        auth,
        requestBody: {
          range: 'RAW',
          values: [
            [
              req.body.firstname,
              req.body.lastname,
              req.body.attending,
              req.body.email,

            ]
          ]
        }
      });
    } catch (err) {
      console.log('ERROR', err);
      return res.status(500).json({ errors: ['Uh oh, something went wrong. Send Sam a text 651-343-6555!'] })
    }

    return res.json({ data: req.body });
  } else {
    return res.status(400).json({ message: 'Not a valid HTTP method' });
  }
}