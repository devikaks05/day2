import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
           
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Link
          to={"/r"}style={{textDecoration: "none",color:"white" }} 

          
          >Registration</Link>
          
          <Button ><Link to={"/t"}
          style={{textDecoration: "none",color:"white" }}
          ></Link>Table</Button>
          <Button color="inherit">First</Button>
        </Toolbar>
      </AppBar>
    </Box>
  
    </div>
  )
}

export default Navbar
