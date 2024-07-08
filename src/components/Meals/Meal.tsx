import React, { useState } from 'react';
import { Box, Button, CircularProgress, Divider, Paper, Typography } from '@mui/material';
import { IMealState } from '../../types.ts';
import { Delete, EditNoteOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

interface Props {
  meal: IMealState;
  deleteMealFunc: (meal: IMealState) => void;
}

const Meal: React.FC<Props> = ({ meal, deleteMealFunc }) => {
  const [isLoading, setLoading] = useState(false);

  const onClickDelete = async () => {
    setLoading(true);
    await deleteMealFunc(meal);
    setLoading(false);
  };

  return (
    <Paper
      sx={{ padding: 1, marginBottom: 1, border: 1 }}>
      <Typography variant="p" component="p" sx={{ opacity: 0.5 }}>
        {meal.mealTime}
      </Typography>
      <Divider label="chip"><i>{meal.mealDate}</i></Divider>

      <Typography variant="h5" component="p">
        {meal.mealDescription}
      </Typography>
      <Typography mb={2} textAlign={'right'} variant="p" component="p">
        <strong>calories:</strong> {meal.mealCalories}
      </Typography>
      <Box sx={{ display: 'flex' }} gap={2} justifyContent={'end'}>
        <Button
          disabled={isLoading}
          onClick={onClickDelete}
          variant={'outlined'}
          color={'error'}
        >
          <Delete />
          {isLoading? <CircularProgress color="error" />:""}
        </Button>
        <Button variant={'contained'} color={'success'}>
          <NavLink to={`/meals/${meal.id}/edit`}>
            <EditNoteOutlined />
          </NavLink>
        </Button>
      </Box>
    </Paper>
  );
};

export default Meal;
