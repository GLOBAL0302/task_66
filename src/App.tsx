import './App.css'
import NavBar from './components/NavBar/NavBar.tsx';
import { Container } from '@mui/material';
import HomeContainer from './containers/HomeConteiner/HomeContainer.tsx';
import { Route, Routes } from 'react-router-dom';
import AddMealForm from './components/AddMealForm/AddMealForm.tsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.tsx';


const App = () => {
  return (
    <>
      <Container>
        <NavBar/>
       <Routes>
         <Route path="/" element={<HomeContainer/>}/>
         <Route path="/addMealForm" element={<AddMealForm/>}/>
         <Route path="/meals/:id/edit" element={<AddMealForm/>}/>
         <Route path="*" element={<NotFoundPage/>}/>
       </Routes>
      </Container>
    </>
  )
};

export default App
