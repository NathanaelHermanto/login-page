import React from 'react';
import Paper from '@mui/material/Paper'
import HeaderStaff from './HeaderStaff';
import { Stack, Typography, Box } from '@mui/material';


const CourseStudents = () => {
    const students = ['Bob Marley', 'Bobi Bola', 'Gal Gadot', 'Chris Evans', 'Abang Ganteng', 'Eneng Geulis'];


  return (
    <>
        <HeaderStaff />
        <Paper
            sx={{ backgroundColor: '#cfe2f3', minWidth: '90%', minHeight: '90%', ml: '5%', mr: '5%', mt: '10px', padding: '5px'}}
        >
            <Typography>
                Course Students
            </Typography>
            
            <Box sx={{ width: '100%' }}>
                <Stack >
                    {students.map((student) => (
                        <Paper 
                        sx={{ backgroundColor: '#99bdff'}}
                        key={student}
                        >
                            <Typography>
                                {student}
                            </Typography>
                        </Paper>
                    ))}
                </Stack>
            </Box>
            
        </Paper>
    </>
  )
}

export default CourseStudents;