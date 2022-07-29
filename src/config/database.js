import mongoose from 'mongoose'
import EnvModule from './envModule'

EnvModule.configEnv()

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
      // useCreateIndex: true,
    })

    console.log('Data base connection was successful.✅')
  } catch (error) {
    console.log('Error connection to MongoDB.❌', error)
    process.exit(1)
  }
}

export default { connectDB }
