import React from 'react';
import { IMealState } from '../../types.ts';
import { Paper } from '@mui/material';
import Meal from './Meal.tsx';
import meal from './Meal.tsx';


interface Props{
  meals:IMealState[]
  deleteMealFunc:(meal:IMealState)=>void
}
const Meals:React.FC<Props> = ({meals,deleteMealFunc}) => {
  return (
    <>
      {meals.map(meal=>(
        <Meal
          key={meal.id}
          meal={meal}
          deleteMealFunc = {deleteMealFunc}>
        </Meal>
      ))}
    </>
  );
};

export default Meals;