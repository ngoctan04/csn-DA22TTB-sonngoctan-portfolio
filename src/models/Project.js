import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: String,
    website: String,
    technologies: String,
    github: String,
    imageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);

export default Project;
