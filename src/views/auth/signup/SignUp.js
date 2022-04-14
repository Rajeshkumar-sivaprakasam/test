import { Lock } from '@mui/icons-material'
import { Checkbox, TextField,Button } from '@mui/material'
import React from 'react'
import './signup.css';
function SignUp() {
  return (
    <div className='contain'>
        <div>
            <Lock style={{color:'white',background:'#10B981',borderRadius:'40px',padding:'10px'}}/>
            <h3 style={{marginTop:'2px'}}>Sign Up</h3>
        </div>
        <form style={{maxWidth:'400px'}} >
        <div  style={{display:'flex',flexDirection:'column'}}>
        <TextField
        style={{margin:'10px'}}
          required
          id="outlined-required"
          label="Email Address"
          
        />
        <TextField
         
         style={{margin:'10px'}}
          required
          id="outlined-required"
          label="Password"
          
        />
        </div>
        <div style={{display:'flex'}}>
        <Checkbox/>
        <p>I certify that I am 18 years of age or older, and agree to the User Agreement and Privacy Policy</p>
        </div>
        <div style={{display:'flex',flexDirection:'column',padding:'10px'}}>
        <Button style={{background:'#3832A0',color:'white',padding:'9px 0px'}}>Sign Up</Button>
        <a href='#' style={{margin:'8px',float:'right'}}>Already have an account? Sign in</a>
        </div>
        </form>
    </div>
  )
}

export default SignUp