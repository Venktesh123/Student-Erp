import express from "express";
import {
  facultyLogin,
  updatedPassword,
  updateFaculty,
  createTest,
  getTest,
  getStudent,
  uploadMarks,
  markAttendance,
  createFaculty,
} from "../controller/facultyController.js";
import auth from "../middleware/auth.js";

const router = express.Router();
router.post("/craetFaculty", createFaculty);
router.post("/login", facultyLogin);
router.post("/updatepassword", auth, updatedPassword);
router.post("/updateprofile", auth, updateFaculty);
router.post("/createtest", auth, createTest);
router.post("/gettest", auth, getTest);
router.post("/getstudent", auth, getStudent);
router.post("/uploadmarks", auth, uploadMarks);
router.post("/markattendance", auth, markAttendance);

export default router;
