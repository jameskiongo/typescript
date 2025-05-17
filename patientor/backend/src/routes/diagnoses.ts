import express, { Response } from "express";
import diagnosesService from "../services/diagnosesService";
import patientData from "../data/patients";
import { PatientEntry } from "../types";

const router = express.Router();

router.get("/", (_req, res: Response<PatientEntry[]>) => {
  res.send(diagnosesService.getEntries());
});
router.post("/", (_req, res) => {
  res.send(patientData);
});

export default router;
