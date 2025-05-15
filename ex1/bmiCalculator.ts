export const calculateBmi = (height: number, weight: number) => {
  const convert = Math.pow(height / 100, 2);
  const bmi = weight / convert;
  console.log(bmi);
  if (bmi < 18.5) {
    return "underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal Range";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else if (bmi > 30) {
    return "obese";
  } else {
    throw new Error("Invalid");
  }
};
