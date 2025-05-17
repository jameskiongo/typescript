import diaries from "../../src/data/entries";

import { NonSensitiveDiaryEntry, DiaryEntry } from "../types";

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const addDiary = () => {
  return null;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addDiary,
};
