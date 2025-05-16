export interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}
export const calculateExercises = (
  exercised: number[],
  target: number,
): ExerciseResult => {
  let daysTrained = 0;
  let averageTime = 0;
  let targetReached = true;
  let rating = 0;
  let ratingDescription = "";

  for (let i = 0; i < exercised.length; i++) {
    if (exercised[i] < 0) {
      throw new Error("Exercise values must be non-negative");
    }
    if (exercised[i] != 0) {
      daysTrained++;
    }
    averageTime = averageTime + exercised[i];
  }
  const calculateAverage = Number((averageTime / exercised.length).toFixed(2));
  if (calculateAverage < target) {
    targetReached = false;
  } else {
    targetReached = true;
  }
  if (calculateAverage == target) {
    rating = 2;
  } else if (calculateAverage > target) {
    rating = 3;
  } else {
    rating = 1;
  }

  if (calculateAverage == target) {
    ratingDescription = "Target Reached";
  } else if (calculateAverage > target) {
    ratingDescription = "Exceeded target";
  } else {
    ratingDescription = "Target Not Reached";
  }

  return {
    periodLength: exercised.length,
    target: target,
    trainingDays: daysTrained,
    average: calculateAverage,
    success: targetReached,
    rating: rating,
    ratingDescription: ratingDescription,
  };
};
// console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
