import type { NextApiRequest, NextApiResponse } from 'next';
import type { sheets_v4, Auth } from 'googleapis';
import type { Person  } from '../../../lib/types';
import type { ValidationResult } from 'joi';

import { google } from 'googleapis';
import { validateRequestBody, log } from '../../../lib/api';

const sheets: sheets_v4.Sheets = google.sheets('v4');

export default async function (req: NextApiRequest, res: NextApiResponse) {
  log(req);

  // append RSVP to spreadsheet
  if (req.method === 'POST') {
    // validate body
    const validation: ValidationResult = validateRequestBody(req.body);
    if (validation.error) {
      const errors = validation.error.details.map((e) => `${e.message}, got: ${e.context.value}`);
      return res.status(400).json({ errors });
    }

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
      const submittedTime = (new Date()).toISOString();
      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        valueInputOption: 'USER_ENTERED',
        range: 'RAW',
        auth,
        requestBody: {
          values: req.body.map((p: Person) => {
            return [
              p.firstname,              // firstname
              p.lastname,               // lastname
              p.attending,              // attending
              p.email,                  // email
              submittedTime,            // time submited (on server)
              JSON.stringify(req.body)  // raw post body for record keeping
            ];
          })
        }
      });
    } catch (err) {
      console.log('ERROR', err);
      return res.status(500).json({ errors: ['Uh oh, something went wrong. Send Sam an email at matthews.sam@gmail.com or text 651-343-6555!'] })
    }

    return res.json({ data: req.body });
  } else {
    return res.status(400).json({ message: `This API does not support ${req.method} requests.` });
  }
}