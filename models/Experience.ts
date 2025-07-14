import mongoose, { Schema } from "mongoose";

interface Experience {
  enDate: string;
  faDate: string;
  enTitle: string;
  faTitle: string;
  enDesc: string;
  faDesc: string;
}

const ExperienceModel = new Schema<Experience>({
  enDate: { type: String, required: true },
  faDate: { type: String, required: true },
  enTitle: { type: String, required: true },
  faTitle: { type: String, required: true },
  enDesc: { type: String, required: true },
  faDesc: { type: String, required: true },
});

export default mongoose.models.Experience ||
  mongoose.model("Experience", ExperienceModel);
