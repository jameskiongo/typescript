import diagnosesData from "../data/diagnoses";
import { PatientEntry } from "../types";

const data: PatientEntry[] = diagnosesData;

const getEntries = (): PatientEntry[] => {
  return data;
};

const addEntry = () => {
  return null;
};

export default {
  getEntries,
  addEntry,
};
