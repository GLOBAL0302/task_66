import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { AddCircleOutlineSharp, SportsGymnastics } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ background: 'green' }}>
        <NavLink to="/">
          <IconButton>
            <Typography color="white" variant="h5" component="span">
              <SportsGymnastics />
              Calories Control
            </Typography>
          </IconButton>
        </NavLink>

        <IconButton sx={{ marginLeft: 'auto' }}>
          <NavLink to="/addMealForm" style={{ color: 'white' }}>
            <AddCircleOutlineSharp />
          </NavLink>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
