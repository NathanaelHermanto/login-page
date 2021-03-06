import React from 'react';
import Paper from '@mui/material/Paper'
import HeaderStaff from './HeaderStaff';
import { Stack, Typography, Box } from '@mui/material';


const Staff = () => {
    const courses = [
        { course: 'Data Science', path: '/staff/students' },
        { course: 'Mathematics', path: '/staff/students' },
        { course: 'Finance', path: '/staff/students' },
        { course: 'Economics', path: '/staff/students' },
        { course: 'History', path: '/staff/students' },
        { course: 'Biology', path: '/staff/students' },
      ];


  return (
    <>
        <HeaderStaff />
        <Paper
            sx={{ backgroundColor: '#cfe2f3', minWidth: '90%', minHeight: '90%', ml: '5%', mr: '5%', mt: '10px', padding: '5px'}}
        >
            <Typography>
                Course Overview
            </Typography>
            
            <Box sx={{ width: '100%' }}>
                <Stack spacing={1}>
                    {courses.map(({course, path}) => (
                        <Paper 
                        sx={{ backgroundColor: '#99bdff'}}
                        >
                            <Typography>
                                <a href={path} style={{textDecoration: "none", color: 'black'}}> {course}</a>
                            </Typography>
                        </Paper>
                    ))}
                </Stack>
            </Box>
            
        </Paper>
    </>
  )
}

export default Staff