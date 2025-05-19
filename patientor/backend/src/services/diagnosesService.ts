import diagnosesData from "../data/diagnoses";
import { v1 as uuid } from "uuid";
import patientData from "../data/patients";
import {
  PatientEntry,
  DiagnosticEntry,
  NonSensitivePatientEntry,
  NewPatientEntry,
} from "../types";

const patientsData: PatientEntry[] = patientData;
const diagnosticData: DiagnosticEntry[] = diagnosesData;

const getDiagnosesEntries = (): DiagnosticEntry[] => {
  return diagnosticData;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};
const addPatient = (entry: NewPatientEntry): PatientEntry => {
  const newPatientEntry = {
    id: uuid(),
    ...entry,
  };
  patientsData.push(newPatientEntry);
  return newPatientEntry;
};

const getPatientData = (): PatientEntry[] => {
  return patientsData;
};
const addEntry = () => {
  return null;
};

export default {
  getDiagnosesEntries,
  getPatientData,
  getNonSensitiveEntries,
  addEntry,
  addPatient,
};
