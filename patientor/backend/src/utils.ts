import {
  parseName,
  parseDob,
  parseSsn,
  parseGender,
  parseOccupation,
} from "./parsers";
import { NewPatientEntry } from "./types";
const toNewPatientEntry = (object: unknown): NewPatientEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }
  if (
    "dateOfBirth" in object &&
    "name" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newEntry: NewPatientEntry = {
      name: parseName(object.name),
      dateOfBirth: parseDob(object.dateOfBirth),
      ssn: parseSsn(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
    };
    return newEntry;
  }
  throw new Error("Incorrect data: some fields are missing");
};
export default toNewPatientEntry;
