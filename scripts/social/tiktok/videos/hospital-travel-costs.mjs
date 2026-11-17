// Travel costs to hospital. Taken from the health costs pages on the website.
import { chips, title, point, p, end } from './_common.mjs';
export const scenes = [
  title('NHS health costs', ['Claim back', 'hospital', 'travel costs'], 'Many people do not know.'),
  point(1, 'Who can claim', chips(['Income-related ESA', 'Pension Credit Guarantee Credit', 'Universal Credit (earnings limits)', 'An HC2 certificate'], 0.8)),
  point(2, 'What it covers', p('The cheapest reasonable way there, such as a bus fare, or mileage and parking. Sometimes a companion too.')),
  point(3, 'How to claim', p('Ask at the hospital cashier or patient services. Keep tickets and receipts. You usually have up to 3 months.')),
  point(4, 'Parking', p('Many hospitals offer free parking for Blue Badge holders and people who visit often.')),
  point(5, 'Wigs and supports', p('NHS wigs and fabric supports are free for some people, including those on certain benefits.')),
  end('Check what you can get', 'General information. Free self-check on our website. Nothing leaves your device.'),
];
