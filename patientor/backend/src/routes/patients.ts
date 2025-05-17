import express, { Response } from "express";
import diagnosesService from "../services/diagnosesService";
import { NonSensitivePatientEntry } from "../types";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatientEntry[]>) => {
  res.send(diagnosesService.getNonSensitiveEntries());
});
router.post("/", (_req, res) => {
  res.send("patientData");
});

export default router;
