export interface IMealInput {
  mealTime: string;
  mealDescription: string;
  mealCalories: string;
  mealDate:string
}

export interface IMealState extends IMealInput {
  id: string;
}
