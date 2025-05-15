import express from "express";
import { calculateBmi } from "./bmiCalculator";
const app = express();

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

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
});
