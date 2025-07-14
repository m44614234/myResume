import mongoose from "mongoose"
const connect = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(process.env.MONGO_URI || "");
      console.log("Connect To DB Successfully :))");
    }
  } catch (err) {
    console.log("DB Connection has error ->", err);
  }
};

export default connect;
