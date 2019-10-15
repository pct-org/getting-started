const logsDir = process.cwd() + '/logs'

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: 'GraphQL API',
      cwd: 'apis/graphql-api',
      script: 'dist/src/main.js',
      instances: 1,
      max_restarts: 5,
      autorestart: true,
      watch: false,
      error_file: `${logsDir}/graphql-api.log`,
      out_file: `${logsDir}/graphql-api.log`,
      log_file: null,
      env: {
        NODE_ENV: 'production',
        PORT: 5000,
        MONGO_DATABASE: 'popcorn-api-development',
        MONGO_URI: '127.0.0.1',
        MONGO_PORT: '27017',
        SCRAPER_URL: 'http://localhost:5001',
        DOWNLOAD_LOCATION: '',
      },
    },
    {
      name: 'Scraper',
      cwd: 'apis/scraper',
      script: 'dist/scraper.js',
      args: '-m pretty -s',
      instances: 1,
      max_restarts: 5,
      autorestart: true,
      watch: false,
      error_file: `${logsDir}/scraper.log`,
      out_file: `${logsDir}/scraper.log`,
      log_file: null,
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
        TEMP_DIR: `${logsDir}/`,
      },
    },
  ],
}
