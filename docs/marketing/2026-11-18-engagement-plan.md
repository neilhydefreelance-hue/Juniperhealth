# Juniper Health engagement plan, 18 November 2026

Prepared by the marketing research agent for Neil Hyde. This is a plan only. Nothing has been posted, sent, submitted or signed up to.

## How this report was made, and its limits

- I read the repo first: `src/content/` (256 condition files, 140 medicine files, 16 benefit files, 29 support files, 10 articles), `src/pages/`, `docs/BRAND.md`, `docs/LAUNCH-CHECKLIST.md`, `docs/social/` (227 TikTok videos with captions, 1 Instagram reel, Reddit banner and icon, Discord channel topics, Facebook group cover, Ko-fi tiers) and the built site in `dist/client/` (478 pages).
- `docs/marketing/` was empty, so this is the first marketing report.
- **Network limits.** From this session, web pages could not be opened directly. Fetches to juniperhealth.info, developers.google.com, scope.org.uk, reddit.com and reddithelp.com all failed. Every outside fact below comes from **search results only**, and most search results summarised secondary sources (blogs, news, agencies), not the original rule pages. Where a claim could not be checked against the original, I say so. **Check every community's rules yourself, on the community itself, before posting anything.**
- I could not see the live site, Search Console, Google Analytics, TikTok Studio or any real traffic numbers. Priorities are based on the repo and general evidence, not on your data.

## What the site already has (so we build on it, not repeat it)

- Strong, well-structured content: 60 conditions each with a "work and benefits" page, a "living well" page and a "treatment" page, 140 medicines, PIP activity and appeal guides.
- Five free browser-only tools: PIP points self-check, PIP back pay calculator, Attendance Allowance check, DLA for children check, NHS health costs check.
- Two free PDFs: the PIP form guide (25 pages) and the autism planner (33 pages).
- Good technical base: sitemap, `robots.txt` allows all crawlers, `llms.txt` built from content, JSON-LD on every page (Organization, WebSite, Person, BreadcrumbList, MedicalWebPage, FAQPage on 140 pages), canonical tags, an editorial policy, a crisis callout on mental health pages.
- A daily TikTok habit (227 videos since late October), a Facebook group and a Discord server with 59 condition channels, and a Ko-fi page.
- Timely articles: Timms Review, Autumn Budget 2026, Milburn review (published yesterday), winter, storms, interest rates, World Diabetes Day.

## Technical quick wins I could see in the repo (not changed)

I did not edit any site code. These are for you, or a coding session, to decide on.

1. **Cloudflare Web Analytics is switched off.** `analyticsToken` is empty in `src/data/settings.json`, so the cookie-free beacon in `BaseLayout.astro` never loads. Google Analytics 4 is set (`G-KQQSYMKD4E`) but only counts people who press "Accept", so you are probably seeing only part of your traffic. Adding the token gives you a fuller, privacy-friendly count for free. Cloudflare says Web Analytics is free with no traffic limit ([Cloudflare](https://cloudflare.com/web-analytics), [Cloudflare blog](https://blog.cloudflare.com/free-privacy-first-analytics-for-a-better-web/)). One older independent review raised questions about a cookie set by the beacon script ([ctrl.blog](https://www.ctrl.blog/entry/review-cloudflare-analytics/)); I could not check whether that still applies, so keep the existing opt-out and privacy-signal checks.
2. **Every page shares one social share image** (`/images/og-default.png`, alt text "Juniper Health logo"). A shared link to "PIP back pay calculator" looks the same as one to "Asthma". Per-page or per-section share images (title on the purple brand background) would make shared links on Facebook, WhatsApp, Bluesky and Reddit clearer. `scripts/og/render.mjs` already exists to build on.
3. **No `sameAs` in the Organization schema** (`src/lib/schema.ts`) and no links from the site to your TikTok or Instagram accounts. Adding your real profile URLs helps search engines and AI tools connect your accounts to the site, and helps visitors follow you.
4. **Two "how to claim" pages are weakly linked.** In the built site, `/benefits/attendance-allowance/how-to-claim/` and `/benefits/dla/how-to-claim/` each get one or fewer links from page content, while the matching PIP page gets many. Linking to them from the condition "work and benefits" pages for older people's and children's conditions (for example ADHD, autism, cataracts, dementia) would help both search and readers.
5. **The about page for Neil has no personal story yet** (153 words, mostly a list). Your launch checklist already says "Real experience builds trust with readers and with Google." This also matters for partners, who will look you up before linking.
6. **Business address and ICO number are blank** in `settings.json`. Partners such as councils, charities and GP surgeries are more likely to link to a site with clear business details. You will also need to sort out the ICO data protection fee before you collect emails for a newsletter (see action 6). This costs money, so it is listed under costs below.
7. Small things: two page titles are 67 characters and may be cut short in results (`/support/health-costs/travel-and-other-costs/`, `/medicines/valproate/`). I found **no broken internal links** across the 478 built pages.
8. **Condition "work and benefits" page titles** read like "Generalised anxiety disorder, work and benefits". People search for phrases like "PIP for anxiety" or "can you get PIP for fibromyalgia". Testing a few titles such as "PIP and anxiety: work, benefits and your rights" on your highest-impression pages (once Search Console shows which they are) could lift clicks. Change a few, watch for 4 weeks, then decide.

---

## 1. Top 10 actions, ranked by impact for effort

### 1. Set up Search Console and Bing Webmaster Tools properly, then use them weekly

- **What to do:** If not already done (it is still unticked in `docs/LAUNCH-CHECKLIST.md`), verify the domain in Google Search Console and submit `https://juniperhealth.info/sitemap-index.xml`. Then add the site to Bing Webmaster Tools using its "import from Google Search Console" option, which saves doing verification twice. Each Monday, open the Performance report, sort by impressions, and note pages with lots of impressions but few clicks.
- **Why it works:** It shows you the real searches people use to find you. It is also the foundation for AI search: Bing Webmaster Tools now has an "AI Performance" report (public preview since February 2026) that shows how often your pages are cited in Microsoft Copilot and Bing AI answers. It does not cover ChatGPT, Perplexity or Google AI Overviews, and it shows citations, not clicks.
- **Time:** 1 hour to set up, then 20 minutes a week.
- **Measure:** impressions, clicks and average position per page in Search Console; citations per page in Bing AI Performance.
- **Sources:** [Bing blog, import from Search Console](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools), [Search Engine Land on Bing AI Performance report](https://searchengineland.com/bing-webmaster-tools-testing-new-ai-performance-report-468039), [Search Influence on what the report shows](https://www.searchinfluence.com/blog/bing-ai-performance-report-copilot-citations/). Note: Search Console "Query groups" only appear for high-volume sites, so you may not see them yet ([Google Search Central blog](https://developers.google.com/search/blog/2025/10/search-console-query-groups)).

### 2. Publish an "April 2027 benefit rates" article now, and update it when GOV.UK confirms

- **What to do:** Write a plain English article: "PIP, Attendance Allowance, DLA, ESA and Carer's Allowance rates from April 2027". Link it from the PIP, AA, DLA and ESA pages, the rates box and the back pay calculator. Make clear which figures are proposed and which are confirmed. Your Budget article already says "April 2027 benefit rates: not yet confirmed", so this is the natural next piece.
- **Why it works:** Rate searches spike every year, and you have the tools (back pay calculator) that people want right after. Search results report that the DWP published proposed 2027 to 2028 rates on 11 November 2026, with PIP, DLA, AA and contributory ESA expected to rise by about 3.5% (for example PIP daily living enhanced rate £114.60 to £118.60). **I could not confirm this on GOV.UK.** Check the DWP "Benefit and pension rates 2027 to 2028" publication before using any figure.
- **Time:** 2 to 3 hours.
- **Measure:** Search Console impressions for "PIP rates 2027", "Attendance Allowance 2027" and similar; clicks from the article to the calculators.
- **Source:** [Benefits and Work, official uprating amounts for 2027 to 2028](https://benefitsandwork.co.uk/news/official-benefits-uprating-amounts-for-2027-to-2028) (secondary source, not checked against GOV.UK).

### 3. Be ready for the Timms Review final report

- **What to do:** Prepare now: a draft update to `the-timms-review-of-pip-explained`, a short TikTok script, a Facebook group post and a Discord announcement, so you can publish within hours of the report. Say clearly what changes and what does not, and that nothing changes for current claims until the law changes.
- **Why it works:** It will be the biggest PIP news story of the winter. Fast, calm, plain English explainers get shared in groups and picked up by journalists. Searches say the review committed to finishing "by autumn 2026", a co-chair update in October 2026 said the final report was still to come, and one source said it may slip to the end of 2026. **No exact date was found.**
- **Time:** 2 hours to prepare, 2 hours on the day.
- **Measure:** visits to the Timms page (Cloudflare and GA4), new Facebook group and Discord joins that week, any new linking sites in Search Console's Links report.
- **Sources:** [Timms Review terms of reference (GOV.UK)](https://assets.publishing.service.gov.uk/media/690215c7918e1f940b3cf7f6/timms-review-of-pip-terms-of-reference.pdf), [Timms Review co-chair update, October 2026 (GOV.UK)](https://assets.publishing.service.gov.uk/media/6ae0b4ffee0b648ce360621f/the-timms-review-co-chair-update-october-2026.pdf), [GOV.UK press release on the interim report](https://www.gov.uk/government/news/first-comprehensive-review-into-pip-finds-it-is-not-fit-for-purpose).

### 4. Repurpose the 227 TikTok videos to YouTube Shorts (and Instagram Reels)

- **What to do:** Create a free YouTube channel and upload the existing videos as Shorts, two or three a day, using the original MP4 files in `docs/social/tiktok/` (not files downloaded from TikTok, which carry a watermark). Put the matching page link in each description. Use the same files as Instagram Reels; you have only posted one Reel so far. Check that any music you use is licensed for each platform, or use no music.
- **Why it works:** The work is already done. YouTube is a search engine in its own right and Shorts can appear in Google results. Reporting says TikTok-watermarked videos did not qualify for the YouTube Shorts Fund and Instagram has said its Reels system shows watermarked videos less. Claims that YouTube "penalises" watermarks are widely repeated but **not confirmed** by YouTube. Using clean source files avoids the question.
- **Time:** 15 minutes a day, or one 90 minute batch a week using YouTube's scheduler.
- **Measure:** YouTube Studio views and "external" clicks; UTM-tagged links (see section 7) in Cloudflare and GA4.
- **Sources:** [Digiday on Shorts Fund and watermarks](https://digiday.com/future-of-tv/youtubes-creator-fund-for-youtube-shorts-will-not-exclude-videos-posted-to-other-platforms), [Tubefilter on Instagram and watermarks](https://www.tubefilter.com/?p=169126), [timetopost on unconfirmed penalty claims and music licences](https://timetopost.co/blog/tiktok-to-youtube-shorts-without-watermark/), [YouTube medical misinformation policy](https://support.google.com/youtube/answer/13813322?hl=en-GB).

### 5. Offer free resources to welfare rights, carers' and condition support services

- **What to do:** Make a one-page "Free resources for advisers and support workers" PDF or page listing the self-checks and PDFs, with a note that the self-checks collect no data. Then, one or two a week, contact local carers' centres, council welfare rights teams, Citizens Advice branches, library services, university disability services and condition support groups to ask if the resources would be useful to their clients and whether they would add them to their resource page. Start in your own area. See section 4 for a draft first message.
- **Why it works:** These services point vulnerable people to trusted information every day, and links from them are the kind of backlink search engines value. Social prescribing link workers connect people to benefits and money help; NHS England reports a large link worker workforce, and local directories (for example Barking and Dagenham's community marketplace) let organisations list services for free.
- **Time:** 1 hour to make the page, then 1 hour a week.
- **Measure:** number of organisations contacted, replies, new referring sites in Search Console Links and in Cloudflare referrers.
- **Sources:** [NHS England, social prescribing link workers](https://www.england.nhs.uk/personalisedcare/workforce-and-training/social-prescribing-link-workers/), [Social Prescribing Academy on what link workers do](https://socialprescribingacademy.org.uk/socialprescribingandme/whoarelinkworkers/), [Plinth guide citing link worker numbers (commercial source)](https://www.plinth.org.uk/complete-guide/what-is-social-prescribing).

### 6. Start a free, consent-based "rate change and news" email list

- **What to do:** Use a free tier (Kit's free plan is reported at up to 10,000 subscribers; MailerLite's free plan was reported cut to 250 subscribers from June 2026). Offer one clear thing: "We will email you when benefit rates or PIP rules change, and each April. No more than once a month." Use a double opt-in form, say exactly what you will send, link the privacy policy, and include an unsubscribe link in every email. Update the privacy and cookie policies first, as your launch checklist says.
- **Why it works:** It brings people back at the moments they most need you (April, Timms, Milburn) without relying on social media algorithms.
- **Legal point:** You are a sole trader, not a charity, so the new "charitable purpose soft opt-in" (in force from 5 February 2026) does **not** apply to you. You need clear consent for every email. Sort out the ICO data protection fee before collecting emails (see costs).
- **Time:** 2 hours to set up, 1 hour per email.
- **Measure:** sign-ups per week, open and click rates in the email tool, visits from `utm_source=newsletter`.
- **Sources:** [ICO, charitable purpose soft opt-in](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/the-charitable-purpose-soft-opt-in/), [Penningtons on the PECR change](https://www.penningtonslaw.com/insights/charitable-marketing-pecr-rules-relaxed/), [Kit free plan, 2026 review (third party)](https://marcandrews.com/kit-free-plan-2026-is-10000-subscribers-really-free/), [MailerLite free plan change (third party)](https://blog.groupmail.io/mailerlite-free-plan-limits/). Check kit.com and mailerlite.com pricing pages yourself; these figures come from review blogs.

### 7. Answer real questions in Reddit and forums, as yourself, within each group's rules

- **What to do:** Spend 20 minutes, three times a week, answering benefits questions in r/DisabilityUK, r/ukbenefits, r/DWPhelp and r/AskUK (benefits threads), plus Mumsnet and the Scope online community. Answer fully in the reply itself. Only add a link to your page where it genuinely adds something (for example the PIP descriptors table), and say it is your site. Read each group's rules first; see section 4.
- **Why it works:** Helpful answers build trust, and Reddit threads are often shown in Google results. The long-standing Reddit idea is "it's fine to be a redditor with a website, it's not fine to be a website with a Reddit account". Many subreddits use a 90/10 rule (for example r/UKPersonalFinance) and some ban self-promotion entirely.
- **Time:** 1 hour a week.
- **Measure:** referrals from reddit.com, mumsnet.com and scope.org.uk in Cloudflare; upvotes and replies.
- **Sources:** [r/UKPersonalFinance 90/10 rule (mirror)](https://lr.eu.psf.lt/r/UKPersonalFinance/wiki/using_rukpersonalfinance), [r/MentalHealthUK rules on self-promotion (mirror)](https://lr.us.psf.lt/r/MentalHealthUK/comments/1f77gs8/sub_rules_faq), [2014 r/modnews post on the 10% guideline (mirror)](https://lr.us.psf.lt/r/modnews/comments/2asaq6/moderators_we_need_your_input_on_the_future_of/ciyb1mp). I could not open Reddit itself, so the rules of r/DisabilityUK and r/ukbenefits are **not verified**.

### 8. Make pages easy for AI answer engines to quote

- **What to do:** On your 20 most visited pages, make sure the first paragraph answers the main question in one or two plain sentences (for example "PIP back pay is paid from the date your claim started."). Keep FAQs on pages (they help readers and AI tools even if Google rarely shows FAQ rich results now). Keep "Last checked" dates current. Check `robots.txt` still allows search crawlers such as Bingbot and OAI-SearchBot (it currently allows all).
- **Why it works:** Google says there is no special markup or "AI text file" needed to appear in AI Overviews and AI Mode; a page just needs to be indexed and eligible for a snippet. ChatGPT search relies heavily on Bing data plus its own crawler, OAI-SearchBot, so Bing indexing (action 1) matters. Your `llms.txt` does no harm but Google says it is not needed. FAQ rich results were limited to authoritative government and health sites in 2023, and some 2026 reports say Google has now stopped showing them entirely; **I could not confirm the 2026 change on Google's own page.**
- **Time:** 3 hours spread over a month.
- **Measure:** Bing AI Performance citations; Search Console clicks to those 20 pages; occasional manual checks in ChatGPT, Perplexity and Google for your top questions.
- **Sources:** [Google, AI features and your website](https://developers.google.com/search/docs/appearance/ai-features), [Search Engine Journal on Google's AI search guide](https://www.searchenginejournal.com/googles-new-ai-search-guide-calls-aeo-and-geo-s), [Search Engine Land on FAQ rich results](https://searchengineland.com/faq-schema-rise-fall-seo-today-463993), [Google FAQPage documentation](https://developers.google.com/search/docs/appearance/structured-data/faqpage), [Yoast on ChatGPT search and Bing](https://yoast.com/chatgpt-search/), [Rank Math on OAI-SearchBot](https://rankmath.com/kb/indexing-in-chatgpt-search/).

### 9. Use journalist requests for free press coverage and links

- **What to do:** Twice a week, search #journorequest on Bluesky and X, and sign up as a source to the free HARO newsletter (now run by Featured) and Source of Sources. Reply only when you can genuinely help with benefits or condition information, and keep replies short with one useful fact.
- **Why it works:** Journalists covering PIP, the Budget, Timms and Milburn need plain English explainers. A quote with a link is one of the most valuable free backlinks you can get. Note that one vendor claims much of #journorequest is noise, and Qwoted's free plan is limited (2 pitches a month) with paid plans costing money.
- **Time:** 30 minutes, twice a week.
- **Measure:** number of replies sent, mentions, new linking sites in Search Console.
- **Sources:** [BuzzStream on journalist requests](https://buzzstream.com/blog/journalist-requests), [Search Engine Land, HARO alternatives](https://searchengineland.com/guide/haro-alternatives), [HARO vs Qwoted (published by HARO, not neutral)](https://www.helpareporter.com/compare/haro-vs-qwoted).

### 10. Tie content to awareness days, starting this week

- **What to do:** Use the calendar in section 5. The next few weeks have Carers Rights Day, Disability History Month and International Day of Persons with Disabilities, all of which match pages you already have.
- **Why it works:** Partners, charities and councils share content on these days, and hashtags are busier.
- **Time:** 1 hour per day covered, using existing videos and pages.
- **Measure:** views on the linked pages in the week of each day.
- **Sources:** listed in section 5.

---

## 2. Quick wins this week (under 30 minutes each)

1. **Carers Rights Day is tomorrow, Thursday 19 November 2026** (third-party listings agree; I could not open Carers UK's site). Post the existing `carers-rights.mp4` and `carers-allowance.mp4` videos, linking to `/support/carers/carers-rights/` and `/support/carers/carers-allowance/`. Source: [awareness-days.co.uk](https://awareness-days.co.uk/awareness-day/carers-rights-day-2/2026-11-19).
2. **Add the Cloudflare Web Analytics token** in Keystatic Business details (or ask a coding session to). 10 minutes.
3. **Submit the sitemap** in Search Console if it is not already there, then **import the site into Bing Webmaster Tools**. 20 minutes.
4. **Pin a Milburn review post** in the Facebook group and Discord, linking to yesterday's article. 10 minutes.
5. **Add UTM links to your TikTok and Instagram bio links** (see section 7). 10 minutes.
6. **Create a YouTube channel** with the same name, logo and bio as TikTok, and upload the first three Shorts from your best-performing TikToks. 30 minutes.
7. **Write a list of 10 local organisations** (carers' centre, Citizens Advice, library, council welfare rights, university disability service) with their public contact pages, ready for action 5. 30 minutes.

## 3. 30, 60, 90 day plan

### Days 1 to 30 (18 November to 17 December 2026)

- Search Console and Bing Webmaster Tools live, weekly 20 minute check started.
- Cloudflare Web Analytics on.
- April 2027 rates article published (marked "proposed" until GOV.UK confirms).
- Timms Review response pack drafted and ready.
- YouTube channel live with 30 or more Shorts; Instagram Reels restarted from existing files.
- Read the rules of 6 communities (section 4) and start answering questions 3 times a week.
- Awareness day posts: Carers Rights Day, Disability History Month, International Day of Persons with Disabilities.
- Write your personal story on the about page.

### Days 31 to 60 (18 December 2026 to 16 January 2027)

- "Free resources for advisers" page live; contact 5 to 10 local organisations.
- Privacy policy updated, ICO fee sorted, then launch the email list with the rates promise.
- Review Search Console: pick 5 pages with high impressions and low clicks, and rewrite their titles and first paragraph.
- Add links to the AA and DLA "how to claim" pages from relevant condition pages.
- Sign up as a source on free journalist request newsletters.
- Winter content push using existing winter, storm and energy pages.

### Days 61 to 90 (17 January to 15 February 2027)

- Time to Talk Day (expected Thursday 4 February 2027): mental health videos with crisis information.
- Send the first newsletter (Timms update, or April rates once confirmed).
- Contact 5 to 10 more organisations, including condition support groups.
- Compare: which channel sent the most engaged visitors (Cloudflare referrers plus UTM data)? Put more time into the top two and drop the weakest.
- Plan the April 2027 rate change push (see section 5).

## 4. Communities and partners to approach

**Important:** I could not open any of these communities' rule pages from this network. The rules below come from search results. Always read the current rules, pinned posts and sidebar on the community itself before posting, and message the moderators first if you are unsure. None of these messages has been sent.

### Online communities

| Community | What I could find about self-promotion | Confidence |
| --- | --- | --- |
| Facebook benefits and condition groups | Many UK support groups ban advertising unless directly relevant; rules are often in pinned posts or joining questions. Example: [Facial Palsy UK group guidelines](https://www.facialpalsy.org.uk/support/useful-info/facebook-group-guidelines/), [guide on reading group rules](https://www.lilachbullock.com/facebook-group-rules-before-you-post/) | Pattern only, check each group |
| Mumsnet Talk | User threads suggest occasional links to your own site are tolerated if you also take part in discussion; deliberate adverts get deleted; anything that is an ad must be labelled. [Mumsnet thread](https://www.mumsnet.com/talk/site_stuff/1031202-Recommendation-or-advert), [ASA guest post on Mumsnet](https://www.mumsnet.com/talk/mumsnet_live_events/3375046-Anything-that-counts-as-an-ad-should-be-clearly-labelled-as-such-Guest-post-by-Wura-Sanusi-of-the-Advertising-Standards-Authority) | Low, official guidelines not found |
| r/AskUK, r/DisabilityUK, r/DWPhelp, r/ukbenefits | Own rules **not found**. r/DWPhelp refreshed its rules in December 2024 ([mirror](https://axebps-redlib.hf.space/r/DWPhelp/comments/1hpmo7m/new_sub_rules/m4lscp0/?context=3)). Similar UK subs ban covert self-promotion ([r/MentalHealthUK mirror](https://lr.us.psf.lt/r/MentalHealthUK/comments/1f77gs8/sub_rules_faq)) | Not verified |
| Scope online community | Advertising links are removed by moderators ([Scope forum](https://forum.scope.org.uk/discussion/comment/913466), [house rules](https://forum.scope.org.uk/kb/articles/5-house-rules)) | Medium |
| Your own Facebook group and Discord | You set the rules (already in `/community/`). Use these to share every new article and video first | High |

**Suggested helpful first message (Reddit or forum reply, not sent):**

> Sorry you are going through this. For PIP, what matters is how your condition affects you on most days, not the diagnosis. You can only "do" an activity if you can do it safely, to a good standard, as often as you need to and in a reasonable time. So if you can make a meal but need to sit down halfway and it takes twice as long, say that. Write about your bad days and how often they happen. Citizens Advice or a local welfare rights service can check your form for free. (I run a free site that explains the PIP activities in plain English, happy to share the link if it helps.)

**Suggested first message to moderators (not sent):**

> Hi, I run Juniper Health, a free plain English site about health conditions and disability benefits in England and Wales. It has a free PIP points self-check that runs in the browser and collects no data. I would like to help answer questions here. Before I ever mention the site, could you tell me whether linking to free resources is allowed, and if so how you would like it done? Thank you.

### Partners

| Partner type | Why they might link | How to find them | Suggested first message |
| --- | --- | --- | --- |
| Carers' centres | Carers ask about Carer's Allowance, AA and carers' rights; you have pages on all three | Local council website, "carers centre" plus your area | See below |
| Citizens Advice branches and council welfare rights teams | Advisers are busy and often point people to self-help reading | Local branch website contact form | See below |
| Condition support groups (for example local arthritis, epilepsy, fibromyalgia or MS groups) | Your condition "work and benefits" pages match their members' questions | Charity "find a local group" pages | See below |
| GP surgeries and social prescribing link workers | Link workers connect people to benefits and money help ([Social Prescribing Academy](https://socialprescribingacademy.org.uk/socialprescribingandme/whoarelinkworkers/)) | Practice website, primary care network | See below |
| Libraries | Libraries run information and digital help sessions | Council library service | See below |
| Local council and community directories | Many accept free listings for health and community information services, subject to local rules (example: [Barking and Dagenham social prescribing page](https://www.lbbd.gov.uk/adult-health-and-social-care/health-and-wellbeing/social-prescribing-0)) | Search "[council] community directory add your service" | Use the directory's own form, when you decide to |
| University disability services | Students ask about Disabled Students' Allowance and PIP; you have a DSA page | University "disability support" page | See below |

**Suggested first message to a partner (email, not sent):**

> Hello, my name is Neil Hyde and I run Juniper Health (juniperhealth.info), a free plain English website about health conditions and disability benefits in England and Wales. It is independent: it is not a charity and not part of the NHS or the DWP. We have free self-checks for PIP, Attendance Allowance and DLA that run in the browser, so nothing a person types leaves their device, and a free 25 page guide to filling in the PIP form. I wondered if these might be useful for the people you support, perhaps on a resources page or as something staff can point to. There is no cost and nothing to sign up to. I would also welcome any feedback on what would make them more useful. Thank you for your time.

## 5. Content ideas tied to existing pages and upcoming dates

| Date | Event | Existing pages and videos to use | New idea |
| --- | --- | --- | --- |
| Thursday 19 November 2026 | Carers Rights Day ([listing](https://awareness-days.co.uk/awareness-day/carers-rights-day-2/2026-11-19)) | `/support/carers/carers-rights/`, `/support/carers/carers-allowance/`, carers videos | "5 rights carers often do not know they have" carousel |
| 19 November to about 19 December 2026 | UK Disability History Month, theme "Disability, Politics and Democracy" (dates vary by source) ([Imperial College](https://www.imperial.ac.uk/equality/events/disability-history-month/), [Usdaw](https://www.usdaw.org.uk/events/uk-disability-history-month)) | Timms and Milburn articles | "How to have your say on benefit changes": contacting your MP, responding to consultations |
| Thursday 3 December 2026 | International Day of Persons with Disabilities (theme reported as "The CRPD at 20") ([IDPwD](https://www.idpwd.gov.au/about-international-day-people-disability/united-nations-idpwd-theme)) | Disability support section, travel and leisure pages | "Free and cheap days out with a carer ticket" video round up |
| December to February | Winter | Winter, storm, energy and water articles and videos | Weekly "cold weather check" post in the Facebook group |
| Late 2026 (date not confirmed) | Timms Review final report | Timms article, PIP pages, points self-check | Rapid explainer (action 3) |
| Thursday 4 February 2027 (expected) | Time to Talk Day, run by Mind and Rethink ([Mind](https://www.mind.org.uk/TimeToTalkDay)) | Mental health condition pages, anxiety and depression self-help videos | "How to talk to your GP about your mental health" with crisis information |
| April 2027 | Benefit rate changes | Rates box, back pay calculator, PIP form PDF | Rates article (action 2), newsletter send, short video per benefit |

**Ideas from existing pages that are underused:**

- **Back pay calculator:** "How much PIP back pay could you get?" short video showing the calculator (with "this is an estimate" clearly on screen).
- **Condition "work and benefits" pages:** a weekly series "PIP and [condition]" in A to Z order (ADHD, arthritis, asthma, bipolar disorder, COPD, depression, epilepsy, fibromyalgia ...), each linking to its page.
- **PIP form PDF:** a Pinterest pin and Instagram carousel "Save this before you fill in your PIP form". Pinterest removes health misinformation, so keep to factual, sourced content ([Pinterest help](https://help.pinterest.com/en-gb/article/health-misinformation)).
- **Bluesky:** UK disability starter packs exist ([blueskystarterpack.com](https://blueskystarterpack.com/accessibility-advocates)); post your articles there with #DisSky and follow disability organisations. Growth figures for UK disability users could not be found.
- **Posting times:** UK guides disagree; evenings (roughly 7pm to 10pm) are the most common suggestion. Use TikTok Studio's follower activity for your own audience instead ([Hopper HQ UK](https://hopperhq.com/blog/best-time-to-post-tiktok-uk/), [Buffer](https://buffer.com/library/best-time-to-post-on-tiktok/)).

**Safety for all content:** Any mental health post must include "If you are struggling, call Samaritans free on 116 123, or 999 in an emergency", as your Discord channel topics already do. Do not give personal medical or legal advice beyond what the site's pages say. Always say "general information, not advice" and "we are not part of the DWP or the NHS", as your captions already do.

## 6. Things to avoid, and anything that costs money

### Avoid

- **Presenting Juniper Health as a charity, the NHS, the DWP or official advice.** This includes partner emails and directory listings.
- **Emailing anyone who has not clearly opted in.** The new charity soft opt-in does not apply to a sole trader ([ICO](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/the-charitable-purpose-soft-opt-in/)). Never buy or borrow email lists.
- **Fake accounts, fake reviews, astroturfing, bought followers, link swaps or paid links.**
- **Posting links in groups that ban self-promotion**, or covert promotion (recommending your site without saying it is yours).
- **Unlabelled affiliate content.** If any post includes affiliate products, it must be obviously an ad without the reader having to click ([Mondaq guide to UK creator ad rules](https://www.mondaq.com/uk/consumer-trading-unfair-trading/1799654/the-content-creators-guide-to-advertising-compliance-in-the-uk), [ASA codes and rulings](https://www.asa.org.uk/codes-and-rulings.html)). Your site already labels products "Ad".
- **Promising outcomes** such as "get PIP with our guide" or "guaranteed back pay".
- **Downloading TikTok videos with the watermark** to repost elsewhere; use the original files.
- **Publishing proposed 2027 rates as final** before GOV.UK confirms them.

### Costs money (kept out of the main plan)

| Item | Cost | Notes |
| --- | --- | --- |
| Google Ad Grants | Not available | For registered charities only. Juniper Health, as a sole trader, is **not eligible** ([Charity Digital](https://charitydigital.org.uk/topics/are-you-eligible-for-a-google-ad-grant-9162)) |
| ICO data protection fee | Annual fee | Likely needed before collecting emails; check with the ICO self-assessment. Amount not checked in this report |
| PIF TICK health information certification | Reported from £600 a year for small non-profits; price for a sole trader not shown | Builds trust, but not free ([PIF](https://pifonline.org.uk/join-pif/as-an-organisation/pif-tick/)) |
| Qwoted Pro | Reported $149.99 a month | Free Basic plan is very limited ([HARO comparison, not neutral](https://www.helpareporter.com/compare/haro-vs-qwoted)) |
| Paid email plans | Varies | Only needed if you outgrow a free tier |
| Paid social ads, boosted posts, paid directory listings | Varies | Not recommended at this stage |

## 7. How to track results with free tools

1. **Google Search Console** (free): weekly, note total clicks and impressions, the top 10 queries, and pages with high impressions but under 2% click rate. Use the Links report to see new sites linking to you.
2. **Bing Webmaster Tools** (free): search performance, plus the AI Performance report for Copilot and Bing AI citations ([Search Engine Land](https://searchengineland.com/bing-webmaster-tools-testing-new-ai-performance-report-468039)).
3. **Cloudflare Web Analytics** (free, cookie-free): visits, top pages and referrers. Turn it on by adding the token ([Cloudflare](https://cloudflare.com/web-analytics)).
4. **Google Analytics 4** (already installed, consent-based): use it for campaign (UTM) reports, remembering it only counts people who accepted cookies.
5. **UTM links** for every link you share outside the site. Use lower case and keep them consistent:
   - TikTok bio: `https://juniperhealth.info/?utm_source=tiktok&utm_medium=social&utm_campaign=bio`
   - YouTube Short about PIP: `https://juniperhealth.info/benefits/pip/?utm_source=youtube&utm_medium=social&utm_campaign=shorts`
   - Partner resource email: `https://juniperhealth.info/tools/?utm_source=partner&utm_medium=email&utm_campaign=adviser-resources`
   - Newsletter: `?utm_source=newsletter&utm_medium=email&utm_campaign=2027-04-rates`
   Do not put UTM tags on links inside your own site, as it muddles the data.
6. **Platform dashboards** (free): TikTok Studio, YouTube Studio, Instagram Insights, Facebook group insights, Discord server insights.
7. **A simple monthly sheet** with these columns: month, Search Console clicks, Cloudflare visits, top 3 referrers, Bing AI citations, email subscribers, Facebook group members, Discord members, new linking sites, partners contacted, partners who replied. Decide each quarter what to keep doing and what to drop.

## Facts I could not verify

- The exact rules of r/AskUK, r/DisabilityUK, r/DWPhelp, r/ukbenefits, Mumsnet and named Facebook groups (Reddit and Scope could not be opened).
- The proposed April 2027 benefit rates (seen only on Benefits and Work, not on GOV.UK).
- The Timms Review final report date.
- Whether Google has fully ended FAQ rich results in 2026 (secondary reports only).
- Current free plan limits for Kit and MailerLite (review blogs only).
- Carers Rights Day 2026 date (third-party listings only), Disability History Month dates (sources differ), Time to Talk Day 2027 date (based on the "first Thursday of February" pattern).
- Whether the live site matches the repo build, and any real traffic figures.
