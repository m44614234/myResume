import mongoose, { Schema } from "mongoose";

interface Skills {
  enType: string;
  faType: string;
  enTitle: string;
  faTitle: string;
  enDesc: string;
  faDesc: string;
}

const SkillsModel = new Schema<Skills>({
  enType: { type: String, required: true },
  faType: { type: String, required: true },
  enTitle: { type: String, required: true },
  faTitle: { type: String, required: true },
  enDesc: { type: String, required: true },
  faDesc: { type: String, required: true },
});

export default mongoose.models.Skills || mongoose.model("Skills", SkillsModel);
