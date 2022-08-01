import mongoose from 'mongoose'
import mongooseUniqueValidator from 'mongoose-unique-validator'

const User = new mongoose.Schema(
  {
    idDocument: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    interviews: [
      {
        ref: 'Interview',
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      trim: true,
      minLength: 10,
      maxLength: 10,
    },
    birthDate: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

User.plugin(mongooseUniqueValidator)
export default mongoose.model('User', User)
