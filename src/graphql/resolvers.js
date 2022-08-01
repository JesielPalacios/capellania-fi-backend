import { AuthenticationError, UserInputError } from 'apollo-server-core'
import jwt from 'jsonwebtoken'
import { v1 as uuid } from 'uuid'

import User from '../models/user'
import Interview from '../models/interview'
import config from '../config'

export const resolvers = {
  Query: {
    // user: (parent, args) => User.findOne({ email: args.email }),
    user: (parent, args) => {
      const { email } = args
      console.log(email)
      return User.findOne({ email })
    },
    users: async (root, args) => User.find({}),
    usersCount: () => User.collection.countDocuments(),
    interview: (parent, args) => Interview.findOne({ idInterview: args.idInterview }),
    interviews: async (root, args) => Interview.find({}),
    interviewsCount: () => Interview.collection.countDocuments(),
  },
  Mutation: {
    createUser: (root, args) => {
      const user = new User({
        ...args,
      })

      return user.save().catch((error) => {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        })
      })
    },
    login: async (root, args) => {
      const user = await User.findOne({ email: args.email })

      if (!user) throw new UserInputError('wrong credentials')

      const userForToken = {
        email: user.email,
        id: user._id,
      }

      return {
        value: jwt.sign(userForToken, config.jwtSecret),
      }
    },
    createInterview: async (root, args, context) => {
      // const { currentUser } = context
      console.log(context)
      // if (!currentUser) throw new AuthenticationError('not authenticated')
      const currentUser = context
      if (!currentUser) throw new AuthenticationError('not authenticated')

      const interview = new Interview({
        ...args,
      })

      interview.idInterview = uuid()
      interview.userCreate = currentUser
      interview.userUpdate = currentUser

      // // if (await Interview.find((i) => i.idInterview === args.idInterview)) {
      // if (
      //   await Interview.find((i) => i.idInterview === interview.idInterview)
      // ) {
      //   throw new UserInputError('something went wrong', {
      //     invalidArgs: args,
      //   })
      // }

      try {
        await interview.save()
        currentUser.interviews = currentUser.interviews.concat(interview)
        await currentUser.save()
        // console.log(currentUser)
        return interview
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        })
      }
    },
  },
  // Interview: {
  //   idInterview: (root) => uuid(),
  // },
}
