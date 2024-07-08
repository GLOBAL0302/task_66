import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { IMealInput } from '../../types.ts';
import axiosApi from '../../axiosApi.ts';
import { useNavigate, useParams } from 'react-router-dom';

import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';

const AddMealForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userMeal, setUserMeal] = useState<IMealInput>({
    mealTime: '',
    mealDescription: '',
    mealCalories: '',
    mealDate:""
  });

  const [isLoading, setIsLoading] = useState(false);

  const fetchMealData = useCallback(async () => {
    if (id) {
      const { data: existMealPlan } = await axiosApi.get(`/meals/${id}.json`);
      setUserMeal(existMealPlan);
    }
  }, [id]);

  useEffect(() => {
    void fetchMealData();
  }, [fetchMealData]);

  const onFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserMeal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChange = (event: SelectChangeEvent) => {
    setUserMeal((prevState) => ({
      ...prevState,
      mealTime: event.target.value as string,
    }));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      if (id) {
        await axiosApi.put(`/meals/${id}.json`, userMeal);
      } else {
        await axiosApi.post('/meals.json', userMeal);
      }
    } finally {
      setIsLoading(false);
      navigate('/');
    }
  };


  const onChange: DatePickerProps['onChange'] = (date, dateString) => {

    if(typeof dateString === 'string'){
      setUserMeal((prevState)=>({
        ...prevState,
        mealDate:dateString
      }))
    }

    console.log(userMeal)
  };

  return (
    <div style={{ background: 'white' }}>
      <Box padding={5}>
        <Typography variant="h3" component="p">
          {id ? 'Edit Meal' : 'Add Meal'}
        </Typography>
        <hr />
        <Box
          component={'form'}
          sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}
          onSubmit={onFormSubmit}
        >
          <FormControl fullWidth sx={{ marginTop: 5, gap: '20px' }}>
            <InputLabel id="demo-simple-select-label">Meal Time</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userMeal.mealTime}
              label="Meal Time"
              onChange={handleChange}
            >
              <MenuItem value="breakfast">Breakfast</MenuItem>
              <MenuItem value="snack">Snack</MenuItem>
              <MenuItem value="lunch">Lunch</MenuItem>
              <MenuItem value="dinner">Dinner</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name="mealDescription"
            required
            fullWidth
            label="Meal Description"
            type="text"
            variant="outlined"
            value={userMeal.mealDescription}
            onChange={onFieldChange}
          />
          <TextField
            name="mealCalories"
            required
            fullWidth
            label="Meal Calories"
            type="number"
            variant="outlined"
            value={userMeal.mealCalories}
            onChange={onFieldChange}
          />
          <Space direction="vertical">
            <DatePicker onChange={onChange} />
          </Space>
          <Button
            disabled={isLoading}
            style={{ width: '200px' }}
            type="submit"
            variant="contained"
            color={id ? 'success' : 'primary'}
          >
            {id ? 'Save Edit' : 'Create'}
            {isLoading ? <CircularProgress color="success" /> : ''}
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default AddMealForm;
