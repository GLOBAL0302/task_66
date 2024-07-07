import { Box, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { IMealState } from '../../types.ts';
import axiosApi from '../../axiosApi.ts';
import Meals from '../../components/Meals/Meals.tsx';

const HomeContainer = () => {
  const [allMeals, setAllMeals] = useState<IMealState[]>([]);

  const fetchMealData = useCallback(async () => {
    const response = await axiosApi.get('/meals.json');
    console.log(response);

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

  return (
    <div style={{ background: 'white' }}>
      <Box padding={5}>
        <Typography variant='h3' component='p'>
          Home
        </Typography>
        <hr />
        <Meals meals={allMeals}/>
      </Box>
    </div>
  );
};

export default HomeContainer;