/*
capitalize the first letter of word it receives and lowercase the rest
 */

export const capitalize = (word) => {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
};

/* 
receives the value of carbs, protein and fat and return the number of calories
knowing that: 
1 gram of carbs contains 4 Calories.
1 gram of protein contains 4 Calories.
1 gram of fat contains 9 Calories.
 */
export const calculateCalories = (carbs, protein, fat) => {
  return carbs * 4 + protein * 4 + fat * 9;
};
