import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: {
    type: String
  },
  content: {
    type: String
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})