export interface IMealInput {
  mealTime: string;
  mealDescription: string;
  mealCalories: string;
}

export interface IMealState extends IMealInput {
  id: string;
}
