import { Inter } from "next/font/google";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import Layout from "@/components/Layout";
const inter = Inter({ subsets: ["latin"] });


const mockStyle = {
  '&:last-child td, &:last-child th': { border: 0 },
  backgroundColor: '#eaeaea',

}

export default function Dashboard() {
  const students = [{
    id: 1,
    name: "Tomas",
    tries: 1,
    reservationDate: "2023-05-27",
    condition1: 'NO',
    condition2: 'SI',
  },
  {
    id: 2,
    name: "Lorena",
    tries: 1,
    reservationDate: "2023-05-27",
    condition1: 'NO',
    condition2: 'NO',
  },
  {
    id: 3,
    name: "Sebastian",
    tries: 2,
    reservationDate: "2023-05-28",
    condition1: 'SI',
    condition2: 'SI',
  },
  {
    id: 4,
    name: "Lorena",
    tries: 1,
    reservationDate: "2023-05-27",
    condition1: 'SI',
    condition2: 'NO',
  },

  ]

  const studentsMocked = students.map((student) => {
    if (student.tries <= 3) {
      return (<TableRow
        key={student.name}
        sx={
          student.condition1 == "NO" || student.condition2 == "NO" ?
            { ...mockStyle } :
            { '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell align="right">{student.id}</TableCell>
        <TableCell component="th" scope="row">
          {student.name}
        </TableCell>
        <TableCell align="right">{student.tries}</TableCell>
        <TableCell align="right">{student.condition1}</TableCell>
        <TableCell align="right">{student.condition2}</TableCell>
        <TableCell>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            justifyItems: 'center',
          }}>
            <div>
              {student.condition1 == "NO" || student.condition2 == "NO" ?
                null :
                <TextField
                  id="date"
                  label="Reservation Date"
                  type="date"
                  disabled
                  value={student.reservationDate}
                  InputLabelProps={{ shrink: true }}
                />
              }
            </div>
          </div>
        </TableCell>
      </TableRow>
      )
    }
  })

  return (
    <Layout>
      <Paper>
        <Grid container justifyContent="center">
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Tries</TableCell>
                  <TableCell align="right">Quiz</TableCell>
                  <TableCell align="right">Attendance</TableCell>
                  <TableCell>Reservation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studentsMocked}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Paper>
    </Layout>
  );
}