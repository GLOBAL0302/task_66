import React from 'react';
import { Box, Button, Divider, Paper, Typography } from '@mui/material';
import { IMealState } from '../../types.ts';
import { Delete, EditNoteOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

interface Props {
  meal: IMealState;
  deleteMealFunc:(meal:IMealState)=>void
}

const Meal: React.FC<Props> = (
  { meal ,deleteMealFunc}) => {


  return (
    <Paper
      sx={{ padding: 1, marginBottom: 1, border: 2 }}
    >
      <Typography variant='body1' component='p' sx={{ opacity: 0.5 }}>{meal.mealTime}</Typography>
      <Divider />
      <Typography mb={1} variant='h5' component='p'>{meal.mealDescription}</Typography>
      <Box sx={{ display: 'flex' }} gap={2} justifyContent={'end'}>
        <Button
          onClick={()=>deleteMealFunc(meal)}
          variant={'outlined'} color={'error'}>
          <Delete />
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