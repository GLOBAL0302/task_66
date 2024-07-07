import {
  Box, Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { IMealInput } from '../../types.ts';
import axiosApi from '../../axiosApi.ts';
import { useNavigate } from 'react-router-dom';

const AddMealForm = () => {
  const navigate = useNavigate();
  const [userMeal, setUserMeal] = useState<IMealInput>({
    mealTime:"",
    mealDescription:"",
    mealCalories:""
  })

  const onFieldChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = event.target
    setUserMeal((prevState)=>(
      {
        ...prevState,
        [name]:value
      }))
  }

  const handleChange = (event: SelectChangeEvent) => {
    setUserMeal((prevState)=>({
      ...prevState,
      mealTime:event.target.value as string
    }))

  };

  const onFormSubmit = async (event:React.FormEvent)=>{
    event.preventDefault();
    try{
      await axiosApi.post("/meals.json", userMeal);
    }finally {
      navigate("/")
    }
  }

  return (
    <div style={{background:'white'}}>
      <Box padding={5}>
        <Typography variant="h3" component="p">
          Add Meal
        </Typography>
        <hr/>
        <Box component={"form"}
             sx={{display:"flex" , flexDirection:"column", gap:5}}
             onSubmit={onFormSubmit}>
          <FormControl
            fullWidth sx={{marginTop:5 , gap:"20px"}}>
            <InputLabel id="demo-simple-select-label">Meal Time</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userMeal.mealTime}
              label="Meal Time"
              onChange={handleChange}
            >
              <MenuItem value="breakfast">Breakfast</MenuItem>
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
              onChange={onFieldChange}/>
            <TextField
              name="mealCalories"
              required
              fullWidth
              label="Meal Calories"
              type="number"
              variant="outlined"
              value={userMeal.mealCalories}
              onChange={onFieldChange}/>
            <Button
              style={{width:"200px"}}
              type="submit" variant="contained" >
              Submit
            </Button>
        </Box>
      </Box>
    </div>
  );
};

export default AddMealForm;