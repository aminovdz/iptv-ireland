import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const pages = [
    { url: 'https://iptv-ireland.co/', priority: '1.0', changefreq: 'weekly' },
    { url: 'https://iptv-ireland.co/contact/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://iptv-ireland.co/setup/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://iptv-ireland.co/privacy/', priority: '0.5', changefreq: 'yearly' },
    { url: 'https://iptv-ireland.co/voorwaarden/', priority: '0.5', changefreq: 'yearly' },
    { url: 'https://iptv-ireland.co/beste-iptv-ierland/', priority: '0.9', changefreq: 'monthly' },
    { url: 'https://iptv-ireland.co/blog/', priority: '0.7', changefreq: 'weekly' },
    { url: 'https://iptv-ireland.co/blog/fix-buffering-streams/', priority: '0.6', changefreq: 'monthly' },
    { url: 'https://iptv-ireland.co/blog/install-lg-smart-tv/', priority: '0.6', changefreq: 'monthly' },
    { url: 'https://iptv-ireland.co/blog/firestick-optimization/', priority: '0.6', changefreq: 'monthly' },
    { url: 'https://iptv-ireland.co/blog/epg-guide-explained/', priority: '0.6', changefreq: 'monthly' },
    { url: 'https://iptv-ireland.co/blog/catchup-vs-vod/', priority: '0.6', changefreq: 'monthly' },
    { url: 'https://iptv-ireland.co/blog/internet-speed-requirements/', priority: '0.6', changefreq: 'monthly' },
    { url: 'https://iptv-ireland.co/locaties/dublin/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://iptv-ireland.co/locaties/belfast/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://iptv-ireland.co/locaties/cork/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://iptv-ireland.co/locaties/limerick/', priority: '0.8', changefreq: 'monthly' },
    { url: 'https://iptv-ireland.co/locaties/waterford/', priority: '0.8', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(p => `  <url>
    <loc>${p.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};