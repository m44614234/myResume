import mongoose, { Schema } from "mongoose";

interface Education {
  enDate: string;
  faDate: string;
  enTitle: string;
  faTitle: string;
  enDesc: string;
  faDesc: string;
}

const EducationModel = new Schema<Education>({
  enDate: { type: String, required: true },
  faDate: { type: String, required: true },
  enTitle: { type: String, required: true },
  faTitle: { type: String, required: true },
  enDesc: { type: String, required: true },
  faDesc: { type: String, required: true },
});

export default mongoose.models.Education ||
  mongoose.model("Education", EducationModel);
