import { ApolloServer } from 'apollo-server'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

// import * as jwt from 'jsonwebtoken'
import jwt from 'jsonwebtoken'

import EnvModule from './config/envModule.js'
import DBConfig from './config/database.js'
import { typeDefinitions, resolvers } from './graphql'
import config from './config'
import User from './models/user'
// import Graphql from './graphql'

EnvModule.configEnv()
DBConfig.connectDB()

const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers,
  // typeDefs: Graphql.typeDefinitions,
  // resolvers: Graphql.resolvers,
  context: async ({ req }) => {
    const auth = req ? req.headers.authorization : null
    if (auth && auth.toLowerCase().startsWith('bearer')) {
      const token = auth.substring(7)
      const decodedToken = jwt.verify(token, config.jwtSecret)
      const currentUser = await User.findById(decodedToken.id).populate(
        'interviews'
      )

      return currentUser
    }
  },
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
})

server.listen().then(({ url }) => {
  // server
  //   .listen({
  //     port: 3001,
  //   })
  // .then(({ url }) => {
  console.log(`🚀  Server ready at port ${url} `)
})

// https://www.google.com/search?q=ERR_UNSUPPORTED_DIR_IMPORT&oq=ERR_UNSUPPORTED_DIR_IMPORT&aqs=chrome..69i57.287j0j1&sourceid=chrome&ie=UTF-8
// https://stackoverflow.com/questions/64449464/error-err-unsupported-dir-import-directory-import-when-attempting-to-start-no
