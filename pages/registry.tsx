import type { sheets_v4, Auth } from 'googleapis';
import type { Goals, APIRegistryPostBody, APIRegistryResponse, APIErrors } from '../lib/types';
import type { SyntheticEvent } from 'react';

import Image from 'next/image';
import { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { google } from 'googleapis';
import Content from '../components/Content';
import Block from '../components/Block';
import GoalTracker from '../components/GoalTracker';

const sheets: sheets_v4.Sheets = google.sheets('v4');

export async function getServerSideProps(context) {
  const auth: Auth.GoogleAuth = new google.auth.GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    projectId: process.env.GCLOUD_PROJECT,
    credentials: {
      private_key: process.env.GOOGLE_PRIVATE_KEY,
      client_email: process.env.GOOGLE_CLIENT_EMAIL
    }
  });

  const goals = (await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    valueRenderOption: 'UNFORMATTED_VALUE',
    range: 'REGISTRY_SUM',
    auth,
  })).data.values.slice(1).reduce((memo, row) => {
    memo[row[0]] = row[3];
    return memo;
  }, {});

  return {
    props: { goals }
  };
}

export default function Page({ goals }: { goals: Goals } ) {
  const [ name, setName ] = useState(null);
  const [ item, setItem ] = useState(null);
  const [ method, setMethod ] = useState(null);
  const [ amount, setAmount ] = useState(null);
  const [ submitting, setSubmitting ] = useState<boolean>(false);
  const [ success, setSuccess ] = useState<null|APIRegistryPostBody>(null);
  const [ errors, setErrors ] = useState<APIErrors>([]);

  async function submit(e: SyntheticEvent) {
    e.preventDefault();
    setSubmitting(true);

    const body: APIRegistryPostBody = {
      name, item, method, amount
    };

    const response = await fetch('/api/registry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });

    const { errors, data }: APIRegistryResponse = await response.json();

    setSubmitting(false);
    if (response.status !== 200) {
      setErrors(errors || ['Something went wrong.']);
    } else {
      setSuccess(data);
    }
  }

  return (
    <Content
      name="Registry"
      summary="Your presence is present enough, truly! If you feel inclined to get us a gift, we have a few options below.">
      <Block id="HONEYMOON">
        <h2>Honeymoon Fund</h2>
        <GoalTracker percent={goals.HONEYMOON} />
        <p>We're headed to Ireland to pay respect to the Kelleher and Collins families. Uncle Tony, if you're reading this, we're looking for a place to stay!</p>
      </Block>
      <Block id="HOUSE">
        <h2>Home Improvement Fund</h2>
        <GoalTracker percent={goals.HOUSE} />
        <p>Our 1955 house in Seattle could use some updates. Any gifts to this category will go toward new windows and doors throughout the house.</p>
      </Block>
      <Block id="PAWS">
        <h2>PAWS Charity Donation</h2>
        <GoalTracker percent={goals.PAWS} />
        <p>Our favorite local shelter for our furry friends. Taylor is a former volunteer at PAWS, where they help house pets and wildlife rehab back into homes or the outdoors. Feel free to donate directly or contribute to this fund and we'll donate on your behalf.</p>
      </Block>

      <Block id="REGISTRY-FORM">
        {!success &&
          <form onSubmit={submit}>
            <h1>Send a gift</h1>
            <p>This registry is pretty low tech. We happily accept Venmo, Paypal, Zelle, or checks & cash. The form below helps us keep track of your gifts and the goals for each fund above. Feel free to send your gift upon submitting this form or on wedding day.</p>
            <input type="text" placeholder="Name(s)" onChange={(e) => setName(e.target.value)} required></input>

            <select style={{ width: '100%' }} onChange={(e) => setItem(e.target.value)} required>
              <option value="" selected>Select gift option...</option>
              <option value="HONEYMOON">Honeymoon Fund</option>
              <option value="HOUSE">Home Improvement Fund</option>
              <option value="PAWS">PAWS Donation</option>
            </select>

            <select style={{ width: '100%' }} onChange={(e) => setMethod(e.target.value)} required>
              <option value="" selected>Select payment method...</option>
              <option value="venmo">Venmo</option>
              <option value="paypal">PayPal</option>
              <option value="zelle">Zelle</option>
              <option value="checkcash">Cash or check</option>
            </select>

            {/* <input type="number" placeholder="Gift amount" onChange={(e) => setAmount(e.target.value)} required></input> */}
            <CurrencyInput
              placeholder="Gift amount"
              allowNegativeValue={false}
              prefix="$"
              onValueChange={(value) => setAmount(value)}
            />

            {method === 'venmo' &&
              <div style={{ textAlign: 'center' }}>
                <p><Image src='/registry-venmo.png' width="100" height="33" /><br/>Venmo gifts can be sent to <span className="mono fill">@mapsam</span></p>
              </div>
            }
            {method === 'paypal' &&
              <div style={{ textAlign: 'center' }}>
                <p><Image src='/registry-paypal.png' width="100" height="33" /><br/>PayPal gifts can be sent to <span className="mono fill">matthews.sam@gmail.com</span>.<br />Please choose the "friends and family" option.</p>
              </div>
            }
            {method === 'zelle' &&
              <div style={{ textAlign: 'center' }}>
                <p><Image src='/registry-zelle.png' width="100" height="33" /><br/>Zelle gifts can be sent to <span className="mono fill">matthews.sam@gmail.com</span> or <span className="mono fill">651-343-6555</span></p>
              </div>
            }
            {method === 'checkcash' &&
              <div style={{ textAlign: 'center' }}>
                <p><Image src='/registry-checkcash.png' width="100" height="33" /><br/>Checks can be made out to "Taylor Kelleher & Sam Matthews".<br /><strong><u>Do not</u> mail us check or cash.</strong> We'll have a place to drop off at the wedding. Thanks!</p>
              </div>
            }

            <input type="submit" className="button" value={submitting ? "Submitting ..." : "Submit"} />
          </form>
        }

        {success &&
          <p>✅ Thank you so much!
            <Image src='/keanu-thanks.gif' width="496" height="356" />
          </p>
        }

        {errors.length > 0 && !success &&
          <div className="form-errors color-red-bg">
            <p className="color-light">There were some errors in the form!</p>
            <ul>
            {errors.map((error, i) => {
              return <li className="color-light" key={`error_${i}`}>{error}</li>
            })}
            </ul>
          </div>
        }
      </Block>
    </Content>
  )
}