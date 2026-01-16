module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    sessions: {
      maxRefreshTokenLifespan: env.int('ADMIN_REFRESH_TOKEN_MAX_LIFESPAN', 2592000000),
      maxSessionLifespan: env.int('ADMIN_SESSION_MAX_LIFESPAN', 7200000),
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});
