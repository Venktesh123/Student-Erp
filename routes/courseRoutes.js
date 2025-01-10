import express from "express";
import {
  getAllCourses,
  getCourseById,
  createCourse,
  addUnit,
  addLecture,
} from "../controller/courseController.js"; // Use import syntax for the controller

const router = express.Router();

// Routes
router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.post("/", createCourse);
router.post("/:courseId/units", addUnit);
router.post("/:courseId/units/:unitId/lectures", addLecture);

export default router; // Use export default
