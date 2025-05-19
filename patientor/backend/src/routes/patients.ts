import express, { Request, Response } from "express";
import diagnosesService from "../services/diagnosesService";
import {
  NewPatientEntry,
  NonSensitivePatientEntry,
  PatientEntry,
} from "../types";
import { errorMiddleware, newPatientParser } from "../middleware/error";

const router = express.Router();

router.get("/", (_req, res: Response<NonSensitivePatientEntry[]>) => {
  res.send(diagnosesService.getNonSensitiveEntries());
});

router.post(
  "/",
  newPatientParser,
  (
    req: Request<unknown, unknown, NewPatientEntry>,
    res: Response<PatientEntry>,
  ) => {
    const addedEntry = diagnosesService.addPatient(req.body);
    res.json(addedEntry);
  },
);

router.use(errorMiddleware);

export default router;
