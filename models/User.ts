import mongoose from "mongoose";

const { Schema } = mongoose;

interface User {
  email: string;
  password: string;
}

const userSchema = new Schema<User>(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);