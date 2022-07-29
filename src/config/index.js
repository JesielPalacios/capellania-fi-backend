export default {
  jwtSecret: process.env.JWT_SECRET || 'BDPEK@',
  jwtSecretReset: process.env.JWT_SECRET_RESET || 'BDPE@123',
  // DB: {
  //   URI: process.env.MONGODB_URI || 'mongodb://localhost/taller-vehicular',
  //   USER: process.env.MONGODB_USER,
  //   PASSWORD: process.env.MONGODB_PASSWORD
  // }
  corsOptions: {
    // https://www.npmjs.com/package/cors

    // "origin": "*",
    // "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    // "preflightContinue": false,
    // "optionsSuccessStatus": 204

    origin: 'http://localhost:3000',
    methods: 'GET,PUT,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  },
}
