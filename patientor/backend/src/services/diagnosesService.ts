import diagnosesData from "../data/diagnoses";
import patientData from "../data/patients";
import {
  PatientEntry,
  DiagnosticEntry,
  NonSensitivePatientEntry,
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
};
