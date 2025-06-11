import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avataer: {
    type:String,
    default: "https://www.gravatar.com/avatar/?d=identicon"
  }
});

const User= mongoose.model("User",userSchema);

export default User;