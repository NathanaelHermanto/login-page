import React from 'react'
import { Grid, Typography } from '@mui/material'
import Header from './Header';


const AdminHome = () => {
    const path = {
        'student': '/admin/students', 
        'staff': '/admin/staff',
    }

  return (
      <>
        <Header/>
        <Grid
        container 
        spacing={0}
        direction="column"
        justifyContent="center"
        alignItems="stretch"
        >

            <Grid item xs={12} sm={8} md={6} lg={6} sx={{ textAlign: 'center' , margin: 1, padding: 1}} >
                <Typography  component="h1" variant="h5">
                    Manage Data
                </Typography>

                <Typography  component="h1" variant="h6">
                    Add, Update, Delete students and staff data
                </Typography>
            </Grid>

            <Grid item xs={12} sm={8} md={6} lg={6} sx={{ textAlign: 'center' , margin: 1, padding: 1}} >
                
                <Grid container
                    spacing={1}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                >
                    <Grid item   sx={{ textAlign: 'center' , margin: 1, padding: 1}}>
                        <Typography textAlign="center" 
                            sx={{ margin: 5, padding: 1, minWidth: '200px', minHeight: '200px', backgroundColor: '#cfe2f3'}}
                        >
                            <a href={path.student} style={{textDecoration: "none", color: 'black'}}> Students </a>
                        </Typography>
                    </Grid>

                    <Grid item   sx={{ textAlign: 'center' , margin: 1, padding: 1}}>
                        <Typography textAlign="center" 
                            sx={{ margin: 5, padding: 1, minWidth: '200px', minHeight: '200px', backgroundColor: '#cfe2f3'}}
                        >
                            <a href={path.staff} style={{textDecoration: "none", color: 'black'}}> Staff </a>
                        </Typography>
                    </Grid>
                </Grid>

            </Grid>


        </Grid>
      </>
  )
}

export default AdminHome