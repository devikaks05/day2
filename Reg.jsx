import { TextField, Typography } from '@mui/material'
import React from 'react'

const Reg = () => {
  return (
    <div>
     
    


     <Typography variant='h1'>login page</Typography>
     <br /><br />
     <TextField variant="outlined" label='name'/>
     <br /><br />
     
      <br /><br />
      <TextField variant="outlined" label='email'/>
      <br /><br />
      <TextField variant="outlined" label='father name'/>
      <br /><br />
      <TextField variant="outlined" label='mother name'/>
      <br /><br />
      
    </div>
  )
}

export default Reg
