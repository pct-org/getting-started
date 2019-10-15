const logsDir = process.cwd() + '/logs'

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'GraphQL API',
      cwd: 'node_modules/@pct-org/graphql-api',
      script: 'dist/src/main.js',
      instances: 1,
      autorestart: false,
      watch: false,
      error_file: `${logsDir}/graphql-api.error.log`,
      out_file: `${logsDir}/graphql-api.out.log`,
      log_file: `${logsDir}/graphql-api.combined.log`,
      env: {
        NODE_ENV: 'production',
        PORT: 5000,
        MONGO_DATABASE: 'popcorn-api-development',
        MONGO_URI: '127.0.0.1',
        MONGO_PORT: '27017',
        SCRAPER_URL: 'http://localhost:5001',
        DOWNLOAD_LOCATION: '',
      },
      env_production: {},
    },

    {
      name: 'Scraper',
      cwd: 'node_modules/@pct-org/scraper',
      script: 'dist/scraper.js',
      args: '-m pretty -s',
      instances: 1,
      autorestart: false,
      watch: false,
      error_file: `${logsDir}/scraper.error.log`,
      out_file: `${logsDir}/scraper.out.log`,
      log_file: `${logsDir}/scraper.combined.log`,
      env: {
        NODE_ENV: 'production',
        PORT: 5001,
        MONGO_DATABASE: 'popcorn-api',
        MONGO_URI: '127.0.0.1',
        MONGO_PORT: '27017',
        FANART_KEY: '',
        OMDB_KEY: '',
        TMDB_KEY: '',
        TRAKT_KEY: '',
        TVDB_KEY: '',
        CRON_TIME: '0 0 */6 * * *',
        TEMP_DIR: `${logsDir}/logs/tmp`,
      },
      env_production: {},
    },
  ],
}
