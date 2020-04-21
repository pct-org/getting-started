const logsDir = process.cwd() + '/logs'

module.exports = {
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

        // Port to run this server on, when changing this one a new Android app must be build with that port
        PORT: 5000,

        // The name of the MongoDB database
        MONGO_DATABASE: 'popcorn-api-development',

        // The URI to the MongoDB database.
        MONGO_URI: '127.0.0.1',

        // The port of the MongoDB database.
        MONGO_PORT: '27017',

        // The username of the MongoDB database, disable if none.
        // MONGO_USER: '',

        // The password of the MongoDB database, disable if none.
        // MONGO_PASS: '',

        // The url to the scraper
        SCRAPER_URL: 'http://localhost:5001',

        // Location where to download everything in, make sure this location exists
        // Also must be a absolute path
        DOWNLOAD_LOCATION: '',
      },
    },
    {
      name: 'Scraper',
      cwd: 'apis/scraper',
      script: 'dist/scraper.js',
      args: '-m pretty',
      instances: 1,
      max_restarts: 5,
      autorestart: true,
      watch: false,
      error_file: `${logsDir}/scraper.log`,
      out_file: `${logsDir}/scraper.log`,
      log_file: null,
      env: {
        NODE_ENV: 'production',

        // The port the API wil be running on.
        PORT: 5001,

        // The name of the MongoDB database
        MONGO_DATABASE: 'popcorn-api',

        // The URI to the MongoDB database.
        MONGO_URI: '127.0.0.1',

        // The port of the MongoDB database.
        MONGO_PORT: '27017',

        // The username of the MongoDB database, disable if none.
        // MONGO_USER: '',

        // The password of the MongoDB database, disable if none.
        // MONGO_PASS: '',

        // The time between cronjobs.
        CRON_TIME: '0 0 */6 * * *',

        // The location of the temporary directory for the logs.
        TEMP_DIR: `${logsDir}/`,

        // API key for Fanart, get one here: https://fanart.tv/get-an-api-key/
        FANART_KEY: '',

        // API key for Omdb, get one here: http://www.omdbapi.com/apikey.aspx
        OMDB_KEY: '',

        // API key for Tmdb, get one here: https://www.themoviedb.org/settings/api/new/form?type=developer
        TMDB_KEY: '',

        // API key for Trakt, get one here: https://trakt.tv/oauth/applications/new (Use the client id)
        TRAKT_KEY: '',

        // API key for Tvdb, get one here: https://www.thetvdb.com/member/api
        TVDB_KEY: '',
      },
    },
  ],
}
