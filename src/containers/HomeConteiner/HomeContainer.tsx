import { Box, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { IMealState } from '../../types.ts';
import axiosApi from '../../axiosApi.ts';
import Meals from '../../components/Meals/Meals.tsx';
import { LunchDining } from '@mui/icons-material';

const HomeContainer = () => {
  const [allMeals, setAllMeals] = useState<IMealState[]>([]);

  const fetchMealData = useCallback(async () => {
    const response = await axiosApi.get('/meals.json');
    const responseData = response.data;
    if (responseData !== null) {
      const newMealSet: IMealState[] = Object.keys(responseData).map((id) => ({
        id,
        ...response.data[id],
      }));
      setAllMeals(newMealSet);
    } else {
      setAllMeals([]);
    }
  }, []);

  useEffect(() => {
    void fetchMealData();
  }, [fetchMealData]);

  const deleteMealFunc = async (meal: IMealState) => {
    if (confirm('Are you sure you want to delete this meal plan')) {
      try {
        await axiosApi.delete(`/meals/${meal.id}.json`);
      } finally {
        await fetchMealData();
      }
    }
  };

  const totalCalories = allMeals.reduce((acc, meal) => {
    return acc + parseInt(meal.mealCalories);
  }, 0);

  return (
    <div style={{ background: 'white' }}>
      <Box padding={2}>
        <Typography variant="h4" component="h4">
          Home
        </Typography>
        <hr />
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Typography textAlign={'right'} variant="p" component="p">
            <strong style={{ color: 'green' }}>Total calories</strong>:{' '}
            {totalCalories}
          </Typography>
          <LunchDining />
        </Box>
        <Meals meals={allMeals} deleteMealFunc={deleteMealFunc} />
      </Box>
    </div>
  );
};

export default HomeContainer;
