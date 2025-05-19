import {
  parseWeather,
  parseVisibility,
  parseComment,
  parseDate,
} from "./parser";
import { NewDiaryEntry } from "./types";

const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "comment" in object &&
    "date" in object &&
    "weather" in object &&
    "visibility" in object
  ) {
    const newEntry: NewDiaryEntry = {
      weather: parseWeather(object.weather),
      visibility: parseVisibility(object.visibility),
      date: parseDate(object.date),
      comment: parseComment(object.comment),
    };

    return newEntry;
  }

  throw new Error("Incorrect data: some fields are missing");
};

export default toNewDiaryEntry;
