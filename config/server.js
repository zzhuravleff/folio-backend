module.exports = ({ env }) => ({
  host: env('HOST', 'studio.zzhur.ru'),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
