import express from "express";
import { calculateBmi } from "./bmiCalculator";
import { calculateExercises } from "./exerciseCalculator";
const app = express();
app.use(express.json());

interface RequestBody {
  exercised: number[];
  target: number;
}

app.get("/bmi", (req, res) => {
  const weight = Number(req.query.weight);
  const height = Number(req.query.height);
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    res.send({ error: "malformatted parameters" });
    return;
  } else {
    const result = calculateBmi(height, weight);
    res.send({
      weight: weight,
      height: height,
      bmi: result,
    });
  }
});
app.post("/calculator", (req, res) => {
  const { exercised, target } = req.body as RequestBody;
  if (
    !Array.isArray(exercised) ||
    exercised.some((day) => typeof day !== "number") ||
    typeof target !== "number" ||
    target < 0
  ) {
    res.status(400).send({ error: "malformatted parameters" });
    return;
  }
  const result = calculateExercises(exercised, target);
  res.send(result);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
