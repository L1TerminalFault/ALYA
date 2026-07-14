export default defineEventHandler(async (event) => {
  const baseUrl = 'https://aliyaconstructionplc-eth.com'
  const currentDate = new Date().toISOString().split('T')[0]

  // List all of your pages here
  const pages = [
    { url: '/home', changefreq: 'weekly', priority: '1.0' },
    { url: '/', changefreq: 'weekly', priority: '0.9' },
    { url: '/about', changefreq: 'monthly', priority: '0.8' },
    { url: '/services', changefreq: 'monthly', priority: '0.8' },
    { url: '/projects', changefreq: 'monthly', priority: '0.8' },
    { url: '/gallery', changefreq: 'monthly', priority: '0.7' },
    { url: '/contact', changefreq: 'monthly', priority: '0.7' }
  ]

  // Build the XML content string
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'

  pages.forEach((page) => {
    xml += '  <url>\n'
    xml += `    <loc>${baseUrl}${page.url}</loc>\n`
    xml += `    <lastmod>${currentDate}</lastmod>\n`
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`
    xml += `    <priority>${page.priority}</priority>\n`
    xml += '  </url>\n'
  })

  xml += '</urlset>'

  // Tell the browser/Google that this is an XML file
  setResponseHeader(event, 'Content-Type', 'application/xml')

  return xml
})
