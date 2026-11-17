# How to edit the Juniper Health website

You do not need to know any code to edit the website. Everything is done in the **Keystatic editor**.

## Opening the editor

Go to **juniperhealth.info/keystatic** and sign in. (Before the site is live, see "Setting up editing" at the bottom of this page.)

On the left you will see:

- **Health condition pages:** fibromyalgia and future conditions
- **Benefit pages:** PIP, Attendance Allowance and DLA
- **Disability support pages:** NHS health costs, travel, leisure, bills, home and equipment, work and study, and carers
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
3. Set the **Web address**. Conditions have three parts: the group, the condition and the page. For a page inside fibromyalgia, write `musculoskeletal/fibromyalgia/your-page-name`, using small letters and hyphens between words.
4. Fill in the **Short menu name**, **Search result description** and **Opening summary**.
5. Set **Position in the topic menu** (1 is first).
6. Write the page and add your sources at the bottom.
7. Click **Save**.

## Adding a new condition

1. Open **Health condition pages** and click **Add**.
2. Set the **Web address** to the group and the condition name, for example `brain-nerves-and-senses/me-cfs`. This becomes its main page.
3. Fill in the **Condition name** box (for example "ME/CFS").
4. Add pages inside it as above, for example `brain-nerves-and-senses/me-cfs/treatment`.
5. It appears automatically, in A to Z order, on its group page, the A to Z list and the home page. Set **Position in the topic menu** on the main page to match its place in the A to Z list, so the editor list stays in order too.

## Adding a new group of conditions

To start a new group, such as mental health conditions, add a page with a one-part web address, for example `mental-health`, a title such as "Mental health conditions" and a short summary. Then add conditions inside it, for example `mental-health/depression`. Ask your developer to add the group to the top menu.

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
5. Redeploy. You can now sign in at juniperhealth.info/keystatic.

## Adding an article

1. In the editor, open **Articles** and choose **Add**.
2. Fill in the title, the search result description, the opening summary and the dates.
3. Under **Related guides**, tick every condition, benefit or support guide the article is about. The article is then listed on those guides, in the sidebar and at the bottom of the main page.
4. Write the article. Keep to plain English and never use em or en dashes.

### Adding affiliate links (ads)

- Use the **Affiliate product (Ad)** block for every affiliate link. It is always labelled "Ad" and the link is marked as sponsored.
- Put the **Advert notice** block near the top of the article.
- Tick **This article contains affiliate links (ads)**.
- Use your Amazon affiliate short link (for example https://link.amazon/...), not the long product address, so the sale is credited to you.
- Never say a product treats or cures a condition, and always mention free NHS options first.

## Adding or updating a medicine

1. In the editor, open **Medicines** and choose **Add** (or pick a medicine to update).
2. Fill in each section: what it is used for, off-label uses, how it works, common and serious side effects, and stopping and withdrawal.
3. Choose **Risk of stopping suddenly**. Use **High** for medicines that can be dangerous to stop suddenly, such as epilepsy medicines, blood thinners, insulin, steroids, beta blockers, antipsychotics and opioids.
4. Under **Show on these condition guides**, tick the conditions it treats. The medicine is then listed on those guides automatically.
5. Add the end of the NHS medicines web address if there is one (for example "sertraline"). The BNF and patient leaflet links are added automatically.
6. Update **Last checked for accuracy**.

Every medicine page shows a warning that it is not medical advice and that people must never stop a medicine without talking to their GP first. You do not need to add this yourself. Medicines are always listed A to Z.
