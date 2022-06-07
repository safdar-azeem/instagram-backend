import { OAuth2Client } from 'google-auth-library'

const client = new OAuth2Client({
   clientId: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
   redirectUri: process.env.GOOGLE_REDIRECT_URI,
})

async function verifyGoogleCredentials(code: string) {
   client.setCredentials({ access_token: code })
   const userinfo = await client.request({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
   })
   return userinfo.data
}

export { verifyGoogleCredentials }
