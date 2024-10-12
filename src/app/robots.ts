import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: '/private/',
      },
      {
        userAgent: 'AdsBot-Google',
        allow: ['/'],
        disallow: '/private/',
      },
      {
        userAgent: 'AdsBot-Google-Mobile',
        allow: ['/'],
        disallow: '/private/',
      },
      {
        userAgent: 'Mediapartners-Google',
        allow: ['/'],
        disallow: '/private/',
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: ['/'],
        disallow: '/private/',
      },
      {
        userAgent: '*',
        disallow: ['/'],
      }
    ],
    sitemap: 'https://integral-leader-610e0a85a4.strapiapp.com/api/sitemap/index.xml',
  }
}