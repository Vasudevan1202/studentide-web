import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://developerhut.in';
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/#features`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#languages`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#curriculum`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#screenshots`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#download`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#faq`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: new Date('2026-11-01'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ];
}
