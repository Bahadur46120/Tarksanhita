export const environment = {
  production: true,
  /**
   * Always relative. Every dynamic request URL in the app is interpolated
   * onto this value (ApiService/ContentClient), so an absolute host here
   * would bake that host into every generated URL. Point local development
   * at a real backend through `proxy.conf.json` instead.
   */
  apiUrl: '/api',
  demoLogin: false,
  siteName: 'Tarksanhita',
  tagline: 'The Debate on1 Logic',
  subtitle: 'Centre for Law, Logic, Debate & Knowledge'
};