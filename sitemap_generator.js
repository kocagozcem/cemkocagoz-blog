const sitemap = require('nextjs-sitemap-generator');

sitemap({
  baseUrl: 'https://cemkocagoz.codes',
  ignoredPaths: ['admin'],
  extraPaths: [],
  pagesDirectory: __dirname + "\\pages",
  targetDirectory : 'public/',
  nextConfigPath: __dirname + "\\next.config.js",
  ignoredExtensions: [
        'png',
        'jpg'
  ],
  pagesConfig: {
    '/blog': {
      priority: '1',
      changefreq: 'daily'
    }
  },
  sitemapStylesheet: []
});

console.log(`✅ sitemap.xml generated!`);