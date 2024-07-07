import React from 'react';
import { IMealState } from '../../types.ts';


interface Props{
  meals:IMealState[]
}
const Meals:React.FC<Props> = ({meals}) => {
  return (
    <>
      {meals.map(meal=>(
        <div key={meal.id}>
          {meal.mealTime}
        </div>
      ))}

    </>
  );
};

export default Meals;