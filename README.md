# tksm

Kelleher Matthews Wedding

## Develop

```
npm install
npm run dev
```

### Environment

```shell
GOOGLE_PRIVATE_KEY=
GOOGLE_CLIENT_EMAIL=
GCLOUD_PROJECT=
GOOGLE_SPREADSHEET_ID=
```

Note the `GOOGLE_PRIVATE_KEY` must be a single-line string, even though they are delivered as multi-line signatures. You can turn it into a string with `\n` line breaks.

```shell
#before
-----BEGIN PRIVATE KEY-----
line1
line2
line3
-----END PRIVATE KEY-----

#after
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nline1\nline2\nline3\n-----END PRIVATE KEY-----"
```