import { Paper, Typography, Select, MenuItem, Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';
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


const AdminStaff = () => {
  const [staffList, setStaffList] = useState([
    createStaff(1, 'Pak Guru', '12.12.1945', 'male', 'multimedia', 'pak@gmail.com'),
    createStaff(2, 'Ben Sherman', '19.12.1955', 'male', 'data science', 'ben@gmail.com'),
    createStaff(3, 'Uli Ilu', '02.12.1980', 'female', 'finance', 'uli@gmail.com'),
    createStaff(4, 'John Boss', '22.02.1978', 'male', 'economics', 'john@gmail.com'),
    createStaff(5, 'Gom Opotai', '01.04.1988', 'male', 'mathematics', 'gom@gmail.com'),
    createStaff(6, 'Hilo Olih', '03.03.1977', 'female', 'multimedia', 'hilo@gmail.com'),
  ]);

  const [gender, setGender] = useState('');

  const handleGenderChange = (ev) => {
    setGender(ev.target.value);
  }


  function createStaff(id, name, dob, gender, department, email){
    return { id, name, dob, gender, department, email };
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const action = data.get('action');
    const newStaff = createStaff(data.get('id'), data.get('name'), data.get('dob'), gender, data.get('department'), data.get('email'))

    const addStaff = (stf) => {
      const staff = staffList.concat(stf);
      setStaffList(staff);
    }

    const deleteStaff= (stf) => {
      const staff = staffList.filter(e => e.id !== stf.id);
      setStaffList(staff);
    }

    const updateStaff = (stf) => {
      var index = staffList.findIndex(x=> x.id === stf.id);
      if (index === -1) {

      } else {
        let temp = staffList.slice();
        temp[index] = stf;
        setStaffList(temp);
      }
    }

    if(action === 'add'){
      addStaff(newStaff);
    } else if (action === 'update') {
      updateStaff(newStaff);
    } else if (action === 'delete'){
      deleteStaff(newStaff);
    }

  };

  return (
   <>
    <Header/>
    <Paper
      sx={{ backgroundColor: '#cfe2f3', minWidth: '90%', minHeight: '90%', ml: '5%', mr: '5%', mt: '10px', padding: '5px'}}
    >
      <Typography sx={{margin: '5px'}}>
        All Staff
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
            {staffList.map((stf) => (
              <TableRow
                key={stf.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {stf.id}
                </TableCell>
                <TableCell align="right">{stf.name}</TableCell>
                <TableCell align="right">{stf.dob}</TableCell>
                <TableCell align="right">{stf.gender}</TableCell>
                <TableCell align="right">{stf.department}</TableCell>
                <TableCell align="right">{stf.email}</TableCell>
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
        Add, Update, Delete Staff
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
          id="dob"
          type="date"
        />
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          row
          onChange={handleGenderChange}
          value={gender}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>

        <FormLabel id="demo-radio-buttons-group-label">Department</FormLabel>
        <Select
          name="department"
          id="department"
          label="department"
          margin="normal"
          required
          sx={{ width: "100%"}}
          >
            <MenuItem value={"mathematics"}>Mathematics</MenuItem>
            <MenuItem value={"multimedia"}>Multimedia</MenuItem>
            <MenuItem value={"data science"}>Data Science</MenuItem>
            <MenuItem value={"economics"}>Economics</MenuItem>
            <MenuItem value={"finance"}>Finance</MenuItem>
        </Select>
        <TextField
          margin="normal"
          required
          fullWidth
          name="email"
          label="email"
          id="email"
        />

        <FormLabel id="demo-radio-buttons-group-label">Action</FormLabel>
        <Select
          name="action"
          id="action"
          label="action"
          margin="normal"
          required
          sx={{ width: "100%"}}
          >
            <MenuItem value={"add"}>Add</MenuItem>
            <MenuItem value={"update"}>Update</MenuItem>
            <MenuItem value={"delete"}>Delete</MenuItem>
        </Select>

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

export default AdminStaff;