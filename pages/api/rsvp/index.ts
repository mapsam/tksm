import type { NextApiRequest, NextApiResponse } from 'next';
import type { sheets_v4, Auth } from 'googleapis';
import type { Person  } from '../../../lib/types';
import type { ValidationResult } from 'joi';

import { google } from 'googleapis';
import crypto from 'crypto';
import { validateRequestBody, log } from '../../../lib/api';

const sheets: sheets_v4.Sheets = google.sheets('v4');

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const requestId = crypto.randomBytes(4).toString('hex');
  log(req, requestId);

  // append RSVP to spreadsheet
  if (req.method === 'POST') {
    // validate body
    const validated: ValidationResult = validateRequestBody(req.body);
    if (validated.error) {
      console.log(JSON.stringify(validated.error, null, 2));
      const errors = validated.error.details.map((e) => {
        return `Person ${e.path[0] || 0 + 1}: ${e.message}, got: ${e.context?.value.slice(0, 200) || 'null'}...`;
      });
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
          values: validated.value.people.map((p: Person) => {
            return [
              p.firstname, // firstname
              p.lastname, // lastname
              p.attendingFriday, // attending friday
              p.attendingSaturday, // attending saturday
              p.attendingSunday, // attending sunday
              validated.value.email, // primary email
              validated.value.phone, // primary phone
              validated.value.restrictions, // dietary restrictions
              validated.value.accommodations, // accomodation notes
              validated.value.words, // words of wisdom
              submittedTime, // time submited (on server)
              JSON.stringify(req.body), // raw post body for record keeping
              JSON.stringify(req.headers), // request headers
              requestId // request ID
            ];
          })
        }
      });
    } catch (err) {
      console.log(`[${requestId}] ERROR`, err);
      return res.status(500).json({ errors: ['Uh oh, something went wrong. Send Sam an email at matthews.sam@gmail.com or text 651-343-6555!'] })
    }

    return res.json({ data: validated.value });
  } else {
    return res.status(400).json({ message: `This API does not support ${req.method} requests.` });
  }
}