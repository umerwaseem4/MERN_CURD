import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/blog_mern", {
      useUnifiedTopology: true,
      useFindAndModify: true,
      useNewUrlParser: true,
    });
    console.log("Mongodb Connected Successfully");
  } catch (error) {
    console.log(error.message);
  }
};

export default connection;
