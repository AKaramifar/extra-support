import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    gender: String,
    avatar: String,
    email: {
      type: String,
      required: true,
      lowercase: true
    },
    city: {
      type: String
    },
    tel: {
      type: String,
      trim: true
    },
    cityId: String,
    password: String,
    cyfStudent: Boolean,
    isAsylumSeekerOrRefugee: Boolean
  },
  { timestamps: { createdAt: true, updatedAt: true } }
)

const UserModel = model('user', userSchema)

export default UserModel