# Launch checklist

## Before going live

- [ ] **Business address:** add an address for legal documents in Keystatic under Business details (a service address is fine). The site shows "Address to be confirmed" until you do.
- [ ] **ICO data protection fee:** check whether you need to pay it with the ICO's online self-assessment at ico.org.uk. Most small businesses that handle personal information (such as emails from the public) need to pay the tier 1 fee. Add the registration number in Business details.
- [ ] **Cloudflare:** domain, hosting, email forwarding and Web Analytics (see DEPLOYMENT.md).
- [ ] **Keystatic Cloud:** set up online editing (see EDITING.md).
- [ ] **Read every page** once, especially the legal pages, and check you are happy with them.
- [ ] **About page:** add your own story to "Neil Hyde" in Keystatic (Other pages). Real experience builds trust with readers and with Google.
- [ ] **Google Search Console and Bing Webmaster Tools** set up, and the sitemap submitted.

## When you are ready to earn

- [ ] **Donations:** create a Ko-fi page or a Stripe payment link, then add it in Business details. The Donate button appears automatically.
- [ ] **Affiliate programmes:** apply to Amazon Associates UK and Awin (for UK disability aid shops). Add products in Keystatic. Every product is labelled "Ad" automatically.
- [ ] **HMRC:** register as self-employed once your trading income is over £1,000 in a tax year.

## Every year

- [ ] **April:** update benefit rates in Keystatic under Benefit rates, and check NHS charges, Carer's Allowance, railcard and card prices on the Disability support pages.
- [ ] **April:** check the NHS health costs rules (NHSBSA leaflet HC11) and update the NHS health costs check if they change.
- [ ] **April:** update the ESA and Universal Credit health element amounts written in the ESA and Universal Credit guides (they are in the page text, not the Benefit rates box).
- [ ] **April, or when PIP rules change:** update the PIP rates in Keystatic, then run `npm run build:guides` to rebuild the PIP form PDF guide (it reads the rates and points automatically) and commit the new PDF.
- [ ] **Every few months:** check the ESA and Universal Credit "What is changing" page against GOV.UK and the House of Commons Library, as the Work Capability Assessment and PIP changes are still being decided.
- [ ] **Each page:** check it against its sources and update "Last checked for accuracy".
- [ ] **Watch for PIP changes** from the Timms Review (due late 2026). If the points or activities change, the PIP self-check needs updating by a developer.
- [ ] **Legal pages:** review the privacy and cookie policies if anything about the site changes (for example adding adverts, a newsletter or accounts).
