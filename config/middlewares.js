module.exports = ({ env }) => {
  // Local file uploads - images served from /uploads via strapi::public middleware
  const assetSources = ["'self'", 'data:', 'blob:'];

  return [
    'strapi::logger',
    'strapi::errors',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'img-src': assetSources,
            'media-src': assetSources,
          },
        },
      },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
};
