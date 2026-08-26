export const environment = {
  production: true,
  /** Static API base. Every request URL is built onto this value. */
  apiUrl: 'https://johnkumar-001-site1.etempurl.com/api',
  /**
   * Left on so the deployed build can be demonstrated without the API. Set to
   * false the moment real accounts exist — these credentials are public.
   */
  demoLogin: true,
  siteName: 'Tarksanhita',
  tagline: 'The Debate on Logic',
  subtitle: 'Centre for Law, Logic, Debate & Knowledge',

  /**
   * Media hosting. Images go to ImgBB, video to Cloudinary; both are uploaded
   * straight from the browser, so only the record's metadata travels through
   * our own API.
   *
   * SECURITY NOTE: `imgbb.apiKey` ships inside the JavaScript bundle and is
   * therefore public. When the API grows an upload proxy, set `proxyUrl` to it
   * and the uploader posts there instead — no other code changes are needed.
   */
  media: {
    /** Point at e.g. `${apiUrl}/media/upload` to route uploads through the API. */
    proxyUrl: '',

    imgbb: {
      endpoint: 'https://api.imgbb.com/1/upload',
      apiKey: '266eddc5856d1b7f9d865769d3a9888e',
      /** ImgBB's own ceiling. */
      maxBytes: 32 * 1024 * 1024
    },

    cloudinary: {
      /** Fill both in to enable video upload; leave blank to accept links only. */
      cloudName: '',
      uploadPreset: '',
      maxBytes: 100 * 1024 * 1024
    },

    /**
     * Mirror every add/remove to `/api/events/{id}/media` as it happens. When
     * the endpoint is absent the uploader falls back silently to saving the
     * list with the event record itself.
     */
    useMediaEndpoint: true
  }
};
