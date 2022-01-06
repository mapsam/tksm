const { google } = require('googleapis');
const sheets = google.sheets('v4');

function log(request) {
  console.log(`${request.method} ${request.url} ${JSON.stringify(request.body)}`);
}

export default async (req, res) => {
  log(req);

  // append RSVP to spreadsheet
  if (req.method === 'POST') {
    // validate body

    // set up gcp client
    const auth = new google.auth.GoogleAuth({
      scopes: ['https://www.googleapis.com/auth/spreadsheets']
    });

    // read rows
    const rows = await sheets.spreadsheets.values.append({
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
            req.body.attending
          ]
        ]
      }
    });

    console.log(rows.data.values);

    return res.json(req.body);
  } else {
    return res.status(400).json({ message: 'Not a valid HTTP method' });
  }
}