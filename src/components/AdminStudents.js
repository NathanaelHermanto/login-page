import { Paper, Typography } from '@mui/material';
import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Header from './Header';


const AdminStudents = () => {
  const [studentList, setStudentList] = useState([
    createStudent(1, 'Bob Marley', '12.12.2000', 'male', 'multimedia', 'bob@gmail.com'),
    createStudent(2, 'Bobi Bola', '12.02.2000', 'male', 'data science', 'bobi@gmail.com'),
    createStudent(3, 'Gal Gadot', '02.12.2000', 'female', 'finance', 'gal@gmail.com'),
    createStudent(4, 'Chris Evans', '22.02.2000', 'male', 'economics', 'chris@gmail.com'),
    createStudent(5, 'Abang Ganteng', '01.04.2002', 'male', 'mathematics', 'abang@gmail.com'),
    createStudent(6, 'Eneng Geulis', '03.03.2001', 'female', 'multimedia', 'eneng@gmail.com'),
  ]);


  function createStudent(id, name, dob, gender, department, email){
    return { id, name, dob, gender, department, email };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const action = data.get('action');
    const newStudent = createStudent(data.get('id'), data.get('name'), data.get('dob'), data.get('gender'), data.get('department'), data.get('email'))

    const addStudent = (std) => {
      const students = studentList.concat(std);
      setStudentList(students);
    }

    const deleteStudent = (std) => {
      const students = studentList.filter(e => e.id !== std.id);
      setStudentList(students);
    }

    const updateStudent = (std) => {
      var index = studentList.findIndex(x=> x.id === std.id);
      if (index === -1) {

      } else {
        let temporaryStudents = studentList.slice();
        temporaryStudents[index] = std;
        setStudentList(temporaryStudents);
      }
    }

    if(action === 'add'){
      addStudent(newStudent);
    } else if (action === 'update') {
      updateStudent(newStudent);
    } else if (action === 'delete'){
      deleteStudent(newStudent);
    }

  };

  return (
   <>
    <Header/>
    <Paper
      sx={{ backgroundColor: '#cfe2f3', minWidth: '90%', minHeight: '90%', ml: '5%', mr: '5%', mt: '10px', padding: '5px'}}
    >
      <Typography sx={{margin: '5px'}}>
        All Students
      </Typography>
      <TableContainer component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">DOB</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">E-Mail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentList.map((student) => (
              <TableRow
                key={student.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {student.id}
                </TableCell>
                <TableCell align="right">{student.name}</TableCell>
                <TableCell align="right">{student.dob}</TableCell>
                <TableCell align="right">{student.gender}</TableCell>
                <TableCell align="right">{student.department}</TableCell>
                <TableCell align="right">{student.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>

    <Paper 
      sx={{ backgroundColor: '#cfe2f3', minWidth: '90%', minHeight: '90%', ml: '5%', mr: '5%', mt: '10px', padding: '5px'}}
    >
      <Typography sx={{margin: '5px'}}>
        Add, Update, Delete Students
      </Typography>
      
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          name="id"
          label="id"
          id="id"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="name"
          label="name"
          id="name"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="dob"
          label="dob"
          id="dob"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="gender"
          label="gender"
          id="gender"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="department"
          label="department"
          id="department"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="email"
          label="email"
          id="email"
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="action"
          label="wished action(add/update/delete)"
          id="action"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Edit
        </Button>
      </Box>

      
    </Paper>
   </>
  )
};

export default AdminStudents;