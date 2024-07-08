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
    <Box mt={1}>
      {meals.map(meal => (
        <Meal
          key={meal.id}
          meal={meal}
          deleteMealFunc={deleteMealFunc}>
        </Meal>
      ))}
    </Box>
  );
};

export default Meals;