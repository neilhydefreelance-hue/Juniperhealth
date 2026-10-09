# Putting the site live on Cloudflare

These steps are done once. They need the Cloudflare account and the domain.

## 1. Add the domain to Cloudflare

1. Sign in to Cloudflare and choose **Add a domain**. Enter `juniperhealth.info`.
2. Pick the **Free** plan.
3. Cloudflare shows two **nameservers**. Log in to the company where you bought the domain and replace its nameservers with Cloudflare's.
4. Wait for Cloudflare to say the domain is **Active** (usually under an hour).

`.app` domains only work over HTTPS. Cloudflare provides the certificate for free.

## 2. Connect the GitHub repository

1. In Cloudflare, go to **Workers & Pages**, then **Create**, then **Import a repository**.
2. Connect GitHub and choose **juniperhealth**.
3. Settings:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Production branch: `main`
4. Under **Variables**, add (once Keystatic Cloud is set up):
   - `PUBLIC_KEYSTATIC_CLOUD_PROJECT` = `your-team/your-project`
5. Save and deploy.

Every change saved in Keystatic, or pushed to `main`, will now rebuild and publish the site automatically.

## 3. Use the real domain

In the Worker's **Settings**, then **Domains and routes**, add `juniperhealth.info` and `www.juniperhealth.info`. Then add a redirect rule so `www` goes to `juniperhealth.info`.

## 4. Email forwarding (hello@juniperhealth.info)

1. In the domain's dashboard, open **Email**, then **Email Routing**, and turn it on.
2. Add a custom address `hello@juniperhealth.info` that forwards to your Gmail address.
3. Confirm the email Cloudflare sends to Gmail.

To reply *from* hello@juniperhealth.info in Gmail, use Gmail's **Send mail as** setting.

## 5. Visitor statistics (no cookies)

1. In Cloudflare, open **Web Analytics** and add the site.
2. Choose the **JavaScript snippet** option (not automatic setup), and copy the **token** from the snippet.
3. In Keystatic, open **Business details** and paste it into **Cloudflare Web Analytics token**. Save.

Statistics respect the opt-out switch on the cookie policy page.

## 6. Tell search engines

1. **Google Search Console:** add `juniperhealth.info` as a Domain property (verify with a DNS record in Cloudflare) and submit `https://juniperhealth.info/sitemap-index.xml`.
2. **Bing Webmaster Tools:** import the site from Google Search Console.
3. Test a few pages in Google's **Rich Results Test** and the **Schema Markup Validator**.
