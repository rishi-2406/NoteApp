import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (e) {
    console.error("Error conencting to db ", e);
    process.exit(1); //failure exiter
  }
};
