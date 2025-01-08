import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://ngoctanttv2004:ngoctan@cluster-ngoctan.b1mza.mongodb.net/tan"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
