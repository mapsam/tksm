const { google } = require('googleapis');
const sheets = google.sheets('v4');

function validateBody(body) {
  const errors = [];
  if (!body) return ['No request body provided'];
  if (!body.firstname) errors.push('Missing firstname.');
  if (!body.lastname) errors.push('Missing lastname.');
  if (!'attending' in body) errors.push('Missing attendance choice.');
  if (!body.email) errors.push('Missing email address.');

  return errors;
}

function log(request) {
  console.log(`${request.method} ${request.url} ${JSON.stringify(request.body)}`);
}

export default async (req, res) => {
  log(req);

  // append RSVP to spreadsheet
  if (req.method === 'POST') {
    // validate body
    const errors = validateBody(req.body);
    if (errors.length) return res.status(400).json({ errors });

    // set up google client
    const auth = new google.auth.GoogleAuth({
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
      console.log('ERROR')
      console.log(err);
      return res.status(500).json({ errors: ['Uh oh, something went wrong. Send Sam a text 651-343-6555!'] })
    }

    return res.json(req.body);
  } else {
    return res.status(400).json({ message: 'Not a valid HTTP method' });
  }
}