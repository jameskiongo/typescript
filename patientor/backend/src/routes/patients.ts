import express, { Response } from "express";
import diagnosesService from "../services/diagnosesService";
import { NonSensitivePatientEntry } from "../types";
import toNewPatientEntry from "../utils";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatientEntry[]>) => {
  res.send(diagnosesService.getNonSensitiveEntries());
});

router.post("/", (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedEntry = diagnosesService.addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch (error) {
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage = "Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
