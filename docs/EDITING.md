# How to edit the Juniper Health website

You do not need to know any code to edit the website. Everything is done in the **Keystatic editor**.

## Opening the editor

Go to **juniperhealth.app/keystatic** and sign in. (Before the site is live, see "Setting up editing" at the bottom of this page.)

On the left you will see:

- **Health condition pages:** fibromyalgia and future conditions
- **Benefit pages:** PIP, Attendance Allowance and DLA
- **Other pages:** about, contact and the legal pages
- **Affiliate products:** shop links shown on condition pages
- **Business details:** your name, address, email and donation link
- **Benefit rates:** the weekly amounts shown on the site and used by the self-checks

## Editing a page

1. Click the section, then the page.
2. Change the text in the main area. It works like a simple word processor.
3. Check the boxes on the right, especially **Last checked for accuracy**. Set it to today's date whenever you have checked the page.
4. Click **Save**.

The website rebuilds itself automatically. Your change will be live in about 2 minutes.

## Adding a new page inside a topic

1. Open **Health condition pages** (or **Benefit pages**) and click **Add**.
2. Type the **Page title**.
3. Set the **Web address**. For a page inside fibromyalgia, write `fibromyalgia/your-page-name`, using small letters and hyphens between words.
4. Fill in the **Short menu name**, **Search result description** and **Opening summary**.
5. Set **Position in the topic menu** (1 is first).
6. Write the page and add your sources at the bottom.
7. Click **Save**.

## Adding a new condition

1. Open **Health condition pages** and click **Add**.
2. Set the **Web address** to just the condition name, for example `me-cfs`. This becomes its main page.
3. Fill in the **Condition name** box (for example "ME/CFS").
4. Add pages inside it as above, for example `me-cfs/symptoms`.
5. Ask your developer to add the condition to the top menu (a one-line change).

## Building blocks

In the page text, click the **+** button to add:

- **Highlight box:** a coloured box for a tip (green), a warning (amber), urgent help (red) or a key fact (purple).
- **Link to a self-check tool:** a large card that sends people to the PIP, Attendance Allowance or DLA check.
- **Donate button**, **Business details box**, **Statistics opt-out switch** and **PIP activities tables:** these fill themselves in from the site settings. Only use them on the pages where they already appear, unless you want them somewhere else too.

## Updating benefit rates (every April)

1. Open **Benefit rates**.
2. Change the **Tax year** (for example "2027 to 2028") and **Rates apply from** (for example "April 2027").
3. Update each amount from the GOV.UK "Benefit and pension rates" page.
4. Click **Save**. The rates boxes, home page and all three self-checks update automatically.

## Adding your address

When you have decided which address to use:

1. Open **Business details**.
2. Type the address in **Address for legal documents**, one line per part of the address.
3. Click **Save**. It will appear in the footer, the privacy policy, the terms, the contact page and the complaints page.

## Adding an affiliate product

1. Open **Affiliate products** and click **Add**.
2. Enter the product name, a short plain description (never say it treats or cures anything), the shop name and your affiliate link.
3. Choose which condition pages it should appear on.
4. Click **Save**. It appears with an "Ad" label on those pages.

## Writing rules

- Plain English, short sentences, UK spelling.
- **Never use long dashes** (em dashes or en dashes). Use a comma, a full stop or brackets. The automatic checks will flag any that slip in.
- Always add your sources.
- Always update **Last checked for accuracy** when you have checked a page.

## Setting up editing (one time, with your developer)

Online editing uses **Keystatic Cloud**, which has a free plan for small teams.

1. Go to keystatic.cloud and sign up with your email.
2. Create a team (for example "juniper-health") and a project (for example "juniperhealth").
3. Connect the project to the GitHub repository **juniperhealth**.
4. In Cloudflare, add a build variable called `PUBLIC_KEYSTATIC_CLOUD_PROJECT` with the value `team-name/project-name` (for example `juniper-health/juniperhealth`).
5. Redeploy. You can now sign in at juniperhealth.app/keystatic.
