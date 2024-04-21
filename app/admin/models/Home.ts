import mongoose, { Schema } from "mongoose";

const HomeSchema = new Schema(
  {
    tagline: String,
    yearsOfExperience: String,
    completedProjects: String,
  },
  {
    timestamps: true,
  }
);

const Home = mongoose.models.Home || mongoose.model("Home", HomeSchema);

export default Home;
