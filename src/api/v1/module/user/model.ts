import { model as mongooseModel, Schema } from "mongoose";

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    minlength: 3,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  }
});

const User = mongooseModel("User", UserSchema);

export default User;
