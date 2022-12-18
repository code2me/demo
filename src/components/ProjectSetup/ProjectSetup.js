import './ProjectSetup.css'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

const ProjectSetup = () => {

  const obj = [
    { name: 'PM Responsible', arr: [] },
    { name: 'DI Responsible', arr: ['Ayushi', 'Chitra', 'Varsha'] },
    { name: 'Methodology', arr: ['Waterfall', 'Agile', 'Hybrid'] },
    { name: 'Frequency', arr: ['Quarterly', 'Sprint wise', 'Task wise', 'Sub wise', 'No Monitoring'] }
  ]

  // const arr = ['PM Responsible', 'DI Responsible', 'Methodology', 'Frequency']
  // const projectName = [];
  // const PMResponsible = [];
  // const DIResponsible = ['Ayushi' , 'Chitra' , 'Varsha'];
  // const Methodology = ['Waterfall' , 'Agile' , 'Hybrid'];
  // const Frequency = ['Quarterly' , 'Sprint wise' , 'Task wise' , 'Sub wise' , 'No Monitoring'];

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(name, checkbox, threshold) {

    return { name, checkbox, threshold };
  }

  const rows = [
    createData('OTD', true, 3),
    createData('DDBD', false, 2),
    createData('DDAD', true, 4),
    createData('Sprint Velocity Compliance', false, 1),
    createData('Burndown Chart', false, 5),
  ];

  return (
    <div className='project-setup-outerdiv'>
      <form className="project-setup">
        <div className='projectName'>
          <p>Project Name</p>
          <input type="text" name="name" />
        </div>
        {obj.map((items) => (
        <label className='project-setup-label'>
          <p>{items.name}</p>
          <div className='dropbox-project'>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"> select </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                >{items.arr.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
            </div>
        </label>
        ))}
      </form>
      <div className='table-container'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>KPI Name</StyledTableCell>
                <StyledTableCell align="right">Maintaining in the Project (Check box)</StyledTableCell>
                <StyledTableCell align="right">Threshold</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.checkbox}</StyledTableCell>
                  <StyledTableCell align="right">{row.threshold}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default ProjectSetup