import React from 'react';
import { IMealState } from '../../types.ts';
import Meal from './Meal.tsx';
import { Box } from '@mui/material';

interface Props {
  meals: IMealState[];
  deleteMealFunc: (meal: IMealState) => void;
}

const Meals: React.FC<Props> = ({ meals, deleteMealFunc }) => {
  return (
    <Box mt={1} style={{overflow:'scroll', height:"70vh"}}>
      {meals.sort((a, b)=>{
        return new Date(a.mealDate).getTime() - new Date(b.mealDate).getTime()
      })
        .map((meal) => (
        <Meal key={meal.id} meal={meal} deleteMealFunc={deleteMealFunc}></Meal>
      ))}
    </Box>
  );
};

export default Meals;
