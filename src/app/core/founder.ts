/**
 * The Centre's founder, as shown on the homepage message panel and the About page.
 *
 * The photograph at assets/brand/founder.jpg is of a real person. If `name` is
 * ever blanked out, the panel falls back to the role label alone rather than
 * inventing one.
 */
export const FOUNDER = {
  /** Leave blank and only the role is shown. */
  name: 'Shivendra Pratap Singh',

  /** Shown above the name. Safe to display on its own. */
  role: 'Founder & Patron',

  /** e.g. 'LL.B., Social Worker' — optional, omitted when blank. */
  credentials: '',

  photo: 'assets/brand/founder.jpg',

  /**
   * The founder's message. Written in the first person; replace with their own
   * words before publication.
   */
  message: [
    'A debate is not a quarrel. It is the most demanding thing two people can do together — ' +
    'hold a disagreement steady for long enough to find out which side the evidence is actually on.',

    'This forum exists so that anyone can do that properly. Take a position. Say why it follows. ' +
    'Show your source. Then read the other side as carefully as you would want yours read. ' +
    'The community decides, and it decides on reasoning — not on volume, and not on who spoke first.'
  ],

  /** Optional short sign-off shown under the message. */
  signOff: 'Welcome to Tarksanhita.'
};
