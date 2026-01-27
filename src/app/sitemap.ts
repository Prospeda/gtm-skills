import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gtm-skills.com';

  const pages = [
    '',
    '/industry',
    '/industry/saas',
    '/industry/financial-services',
    '/industry/healthcare',
    '/industry/manufacturing',
    '/industry/professional-services',
    '/industry/ecommerce',
    '/industry/real-estate',
    '/industry/education',
    '/role',
    '/role/sdr',
    '/role/ae',
    '/role/sales-manager',
    '/role/revops',
    '/role/csm',
    '/role/founder',
    '/workflow',
    '/workflow/cold-to-close',
    '/workflow/discovery',
    '/workflow/demo-proposal',
    '/workflow/competitive',
    '/workflow/expansion',
    '/workflow/qbr',
    '/methodology',
    '/methodology/meddpicc',
    '/methodology/spin',
    '/methodology/challenger',
    '/methodology/sandler',
    '/methodology/value-selling',
    '/methodology/gap-selling',
    '/free-tools',
    '/free-tools/tonalities',
    '/free-tools/tonalities/steve-jobs',
    '/free-tools/tonalities/jeff-bezos',
    '/free-tools/tonalities/chris-voss',
    '/free-tools/tonalities/hemingway',
    '/free-tools/tonalities/cormac-mccarthy',
    '/free-tools/clawdbot',
    '/download',
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'daily' : 'weekly',
    priority: path === '' ? 1 : 0.8,
  }));
}
