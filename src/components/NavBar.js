//import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/*MUI stuff */
import { AppBar, Button, Toolbar  } from "@mui/material";

function NavBar(){  
    return (
      <div>
        <AppBar>
          <Toolbar className='nav-container'>
            <Button color="inherit" component={Link} to="/login" > 
              Login
            </Button>
            <Button color="inherit" component={Link} to="/" >
              Home
            </Button>
            <Button color="inherit" component={Link} to="/signup" >
              Signup
            </Button>            
          </Toolbar>
        </AppBar>        
      </div>
    )
  }
export default NavBar
