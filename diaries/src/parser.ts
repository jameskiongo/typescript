import { Visibility, Weather } from "./types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};
const isWeather = (param: string): param is Weather => {
  return Object.values(Weather)
    .map((w) => w.toString())
    .includes(param);
};

const isVisibility = (param: string): param is Visibility => {
  return Object.values(Visibility)
    .map((v) => v.toString())
    .includes(param);
};
export const parseComment = (comment: unknown): string => {
  if (!comment || !isString(comment)) {
    throw new Error("Incorrect or missing comment");
  }

  return comment;
};
export const parseDate = (date: unknown): string => {
  if (!date || !isString(date)) {
    throw new Error("Incorrect or missing date");
  }
  return date;
};

export const parseVisibility = (visibility: unknown): Visibility => {
  if (!visibility || !isString(visibility) || !isVisibility(visibility)) {
    throw new Error("Incorrect or missing visibility: " + visibility);
  }
  return visibility;
};
export const parseWeather = (weather: unknown): Weather => {
  if (!weather || !isString(weather) || !isWeather(weather)) {
    throw new Error("Incorrect or missing weather: " + weather);
  }
  return weather;
};
