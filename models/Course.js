import mongoose from "mongoose";

// Lecture Schema
const LectureSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    duration: { type: Number, required: true }, // Duration in minutes
    videoUrl: { type: String, required: false },
  },
  { timestamps: true }
);

// Unit Schema
const UnitSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    lectures: [LectureSchema], // Array of Lecture sub-documents
  },
  { timestamps: true }
);

// Course Schema
const CourseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    units: [UnitSchema], // Array of Unit sub-documents
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", CourseSchema);

export default Course;
