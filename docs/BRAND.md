# Juniper Health brand guide

## Colours

Taken from the logo gradient (#8556B8 to #432777). Every text pairing meets WCAG 2.2 AA contrast.

| Role | Name | Hex | Contrast on white | Use |
| --- | --- | --- | --- | --- |
| Primary | Juniper Purple | #5B3494 | 8.9:1 | Buttons, links |
| Primary dark | Deep Juniper | #432777 | 11.7:1 | Hover states, gradients |
| Headings | Night Berry | #2E1A52 | 15.2:1 | Headings, footer background |
| Decoration | Lavender Bloom | #8556B8 | 5.2:1 | Labels, icons |
| Tint | Mist | #F5F0FB | background | Tinted sections |
| Good news | Leaf Green | #1F7A5C | 5.3:1 | Progress, positive results |
| Highlight | Marigold | #F2B441 | 9.2:1 with dark text | Main calls to action, always with dark text |
| Body text | Ink | #1E1B26 | 16.9:1 | Paragraphs |
| Secondary text | Slate | #524C63 | 8.2:1 | Captions, meta text |
| Warning | Amber | #8A5A00 on #FFF4DB | 5.4:1 | "Take care" boxes |
| Urgent | Alert Red | #B3261E | 6.5:1 | Errors, crisis boxes |

Dark mode uses #15121C as the background, #EDEAF3 for text, #C9B3EC for links and labels, and #6FD1A8 for good news.

All colours are CSS variables in `src/styles/global.css`.

## Fonts

- **Lexend** for headings and buttons. Rounded and friendly, matching the logo lettering, and designed to be easy to read.
- **Atkinson Hyperlegible Next** for body text and forms. Designed by the Braille Institute for readers with low vision.

Body text is 18px with a line height of 1.6.

## Logo and icon

- `docs/logo-master.png`: the full round logo.
- `src/assets/plant.svg`: the plant on its own, redrawn as a vector. Used in the header, favicon and home screen icons.
- Run `node scripts/make-icons.mjs` to rebuild the icons, and `node scripts/og/render.mjs` to rebuild the social share image.

## Writing style

- **Plain English.** Aim for a reading age of 9 to 11, like GOV.UK and the NHS.
- **Short sentences.** One idea per sentence.
- **Common words.** Say "help" not "assistance", "use" not "utilise". Explain any word people may not know.
- **Speak to the reader.** Use "you" and "we".
- **UK spelling.**
- **Never use em dashes or en dashes.** Use a comma, a full stop or brackets instead. Write ranges as "8 to 11".
- **Be honest.** Never promise that someone will get a benefit.
- **Be kind.** Many readers are unwell, in pain or worried about money.
