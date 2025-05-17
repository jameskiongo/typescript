import diagnosesData from "../data/diagnoses";
import patientData from "../data/patients";
import { PatientEntry, DiagnosticEntry } from "../types";

const patientsData: PatientEntry[] = patientData;
const diagnosticData: DiagnosticEntry[] = diagnosesData;

const getDiagnosesEntries = (): DiagnosticEntry[] => {
  return diagnosticData;
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
  addEntry,
};
