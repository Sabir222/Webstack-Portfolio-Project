import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.bluboarding.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      alternates: {},
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/about`,
          fr: `${baseUrl}/fr/a-propos`,
        },
      },
    },
    {
      url: `${baseUrl}/lessons`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/lessons`,
          fr: `${baseUrl}/fr/cours`,
        },
      },
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/blog`,
          fr: `${baseUrl}/fr/blog`,
        },
      },
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/contact`,
          fr: `${baseUrl}/fr/contact`,
        },
      },
    },
    {
      url: `${baseUrl}/lessons/kitesurf`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/lessons/kitesurf`,
          fr: `${baseUrl}/fr/cours/kitesurf`,
        },
      },
    },
    {
      url: `${baseUrl}/lessons/surf`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/lessons/surf`,
          fr: `${baseUrl}/fr/cours/surf`,
        },
      },
    },
    {
      url: `${baseUrl}/lessons/wingfoil`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${baseUrl}/en/lessons/wingfoil`,
          fr: `${baseUrl}/fr/cours/wingfoil`,
        },
      },
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/a-propos`,
          en: `${baseUrl}/en/about`,
        },
      },
    },
    {
      url: `${baseUrl}/cours`,
      lastModified: new Date(),
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/cours`,
          en: `${baseUrl}/en/lessons`,
        },
      },
    },
    {
      url: `${baseUrl}/cours/wingfoil`,
      lastModified: new Date(),
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/cours/wingfoil`,
          en: `${baseUrl}/en/lessons/wingfoil`,
        },
      },
    },
    {
      url: `${baseUrl}/cours/surf`,
      lastModified: new Date(),
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/cours/surf`,
          en: `${baseUrl}/en/lessons/surf`,
        },
      },
    },
    {
      url: `${baseUrl}/cours/kitesurf`,
      lastModified: new Date(),
      alternates: {
        languages: {
          fr: `${baseUrl}/fr/cours/kitesurf`,
          en: `${baseUrl}/en/lessons/kitesurf`,
        },
      },
    },
  ];
}
