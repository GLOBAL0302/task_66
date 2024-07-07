import './App.css'
import NavBar from './components/NavBar/NavBar.tsx';
import { Container } from '@mui/material';
import HomeContainer from './containers/HomeConteiner/HomeContainer.tsx';
import { Route, Routes } from 'react-router-dom';
import AddMealForm from './components/AddMealForm/AddMealForm.tsx';


const App = () => {

  return (
    <>
      <Container>
        <NavBar/>
       <Routes>
         <Route path="/" element={<HomeContainer/>}/>
         <Route path="/addMealForm" element={<AddMealForm/>}/>
       </Routes>
      </Container>
    </>
  )
};

export default App
