import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

const theme =  createTheme();


const Login = () => {
    const [tries, setTries] = useState(0);
    const adminPath = '/admin';
    const staffPath = '/staff';

    let navigate = useNavigate();
    
    const routeChange = (newPath) => {
      let path = newPath;
      navigate(path)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        
        var username = data.get('username');
        var password = data.get('password');

        if(username === 'admin' && password === 'admin'){
          console.log('admin');
          routeChange(adminPath)
        } else if (username === 'staff' && password === 'staff'){
          console.log('staff');
          routeChange(staffPath);
        } else {
          var actualTries = tries + 1;
          setTries(actualTries)
          console.log('wrong credentials');
        };

      };

      const LoginPage = () =>{
        return (
          <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>

              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  // onClick={handleSignIn}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
        );
      }
    
      if(tries === 3){
        return ('error invalid credentials entered more than 3 times');
      } else {
        return (
          <LoginPage/>
        );
      }
      
}

export default Login;