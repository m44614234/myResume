import mongoose, { Schema } from "mongoose";
interface Contact{
  name: string;
  email: string;
  message: string;
  phone: number;
}

const schema = new Schema<Contact>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  phone: { type: Number, required: true },
});

export default mongoose.models.Contact || mongoose.model("Contact", schema);

