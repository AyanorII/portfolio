/** @type {import('next-sitemap').IConfig} */
const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  siteUrl: isDev
    ? "http://localhost:3000"
    : process.env.SITE_URL || 'https://ayanori-toyoda.com',
  generateRobotsTxt: true,
}
