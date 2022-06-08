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


const AdminStudents = () => {
  const [studentList, setStudentList] = useState([
    createStudent(1, 'Bob Marley', '12.12.2000', 'male', 'multimedia', 'bob@gmail.com', '2015-01-01', 'winter'),
    createStudent(2, 'Bobi Bola', '12.02.2000', 'male', 'data science', 'bobi@gmail.com', '2015-01-01', 'winter'),
    createStudent(3, 'Gal Gadot', '02.12.2000', 'female', 'finance', 'gal@gmail.com', '2015-01-01', 'winter'),
    createStudent(4, 'Chris Evans', '22.02.2000', 'male', 'economics', 'chris@gmail.com', '2015-01-01', 'winter'),
    createStudent(5, 'Abang Ganteng', '01.04.2002', 'male', 'mathematics', 'abang@gmail.com', '2015-01-01', 'winter'),
    createStudent(6, 'Eneng Geulis', '03.03.2001', 'female', 'multimedia', 'eneng@gmail.com', '2015-01-01', 'winter'),
  ]);

  const [gender, setGender] = useState('');
  const [, setDateError] = useState('');
  const [filter, setFilter] = useState('');
  const [semFilter, setSemFilter] = useState('');
  const [filteredData, setFilteredData] = useState(studentList);

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  }

  const handleFilterChange = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  }

  const handleSemFilterChange = (e) => {
    e.preventDefault();
    setSemFilter(e.target.value);
  }

  const validateDob = (dob) => {
    const date = new Date(dob);
    const min = new Date('1960-01-01');
    const max = new Date('2003-01-01');
    if(date > max || date < min){
      setDateError('error dob');
      return 'error dob'
    } else return;
  }

  const validateJoiningDate= (d) => {
    const date = new Date(d);
    const min = new Date('2015-01-01');
    const max = new Date('2022-05-01');
    if(date > max || date < min){
      setDateError('error joining date');
      return 'error dob'
    } else return;
  }

  function createStudent(id, name, dob, gender, department, email, joinDate, semester){
    return { id, name, dob, gender, department, email, joinDate, semester };
  };

  const isWinter = (month) => {
    return month>10 || month < 3;
  }

  const getMonth = (joinDate) => {
    const date = joinDate.split('-');
    return date[1];
  }

  const handleClickFilter = () => {
    if (filter !== '' && semFilter !== '') {
      const filtered = studentList.filter(x => x.department === filter).filter(x => x.semester === semFilter);
      setFilteredData(filtered);
    } else if (filter === '' && semFilter !== '') {
      const filtered = studentList.filter(x => x.semester === semFilter);
      setFilteredData(filtered);
    } else if (filter !== '' && semFilter === ''){
      const filtered = studentList.filter(x => x.department === filter);
      setFilteredData(filtered);
    }
  }

  const handleSubmit =  async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const action = data.get('action');
    const dob = data.get('dob');
    const joinDate = data.get('join-date');

    const month = getMonth(joinDate);
    const semester = isWinter(month)? 'winter' : 'summer';
    
    const newStudent = createStudent(data.get('id'), data.get('name'), dob, gender, data.get('department'), data.get('email'), joinDate , semester)
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
        addStudent(std)
      } else {
        let temporaryStudents = studentList.slice();
        temporaryStudents[index] = std;
        setStudentList(temporaryStudents);
      }
    }

    var error = await validateDob(dob);
    if(error) return;
    error = await validateJoiningDate(joinDate);
    if(error) return;

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

      <Typography sx={{margin: '5px'}}>
        Filter
      </Typography>

      
      <Select
        name="filter"
        id="filter"
        label="filter"
        margin="normal"
        required
        onChange={handleFilterChange}
        >
          <MenuItem value={"mathematics"}>Mathematics</MenuItem>
          <MenuItem value={"multimedia"}>Multimedia</MenuItem>
          <MenuItem value={"data science"}>Data Science</MenuItem>
          <MenuItem value={"economics"}>Economics</MenuItem>
          <MenuItem value={"finance"}>Finance</MenuItem>
      </Select>
      
      <Select
        name="filter"
        id="filter"
        label="filter"
        margin="normal"
        required
        onChange={handleSemFilterChange}
        >
          <MenuItem value={"winter"}>winter</MenuItem>
          <MenuItem value={"summer"}>summer</MenuItem>
          
      </Select>
      

      <Button
        onClick={handleClickFilter}
      >
        Apply filter
      </Button>
      <Button
        onClick={()=>setFilteredData(studentList)}
      >
        reset
      </Button>

      <TableContainer component={Paper}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">DOB</TableCell>
              <TableCell align="right">Joining Date</TableCell>
              <TableCell align="right">Gender</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">E-Mail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((student) => (
              <TableRow
                key={student.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {student.id}
                </TableCell>
                <TableCell align="right">{student.name}</TableCell>
                <TableCell align="right">{student.dob}</TableCell>
                <TableCell align="right">{student.joinDate}</TableCell>
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

        <FormLabel id="demo-radio-buttons-group-label">Date of birth</FormLabel>
        <TextField
          margin="normal"
          required
          fullWidth
          name="dob"
          id="dob"
          type="date"
          InputProps={{inputProps: { min: new Date("1960-01-01"), max: new Date("2003-01-01")} }}
        />

        <FormLabel id="demo-radio-buttons-group-label">Joining date</FormLabel>
        <TextField
          margin="normal"
          required
          fullWidth
          name="join-date"
          id="join-date"
          type="date"
          InputProps={{inputProps: { min: "2015-01-01", max: "2022-05-01"} }}
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

        <FormLabel >Department</FormLabel>
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

        <FormLabel >Action</FormLabel>
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

export default AdminStudents;