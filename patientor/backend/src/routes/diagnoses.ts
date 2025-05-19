import express, { Response } from "express";
import diagnosesService from "../services/diagnosesService";
import { DiagnosticEntry } from "../types";
const router = express.Router();

router.get("/", (_req, res: Response<DiagnosticEntry[]>) => {
  res.send(diagnosesService.getDiagnosesEntries());
});
router.post("/", (_req, res) => {
  res.send("patientData");
});

export default router;
