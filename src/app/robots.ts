import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'],
    },
    sitemap: [
      'https://www.ide.developerhut.in/sitemap.xml',
      'https://www.ide.developerhut.in/sitemap.txt',
      'https://developerhut.in/sitemap.xml',
    ],
  };
}
