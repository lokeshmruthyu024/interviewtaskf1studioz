import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ArchiveCart = () => {
  return (
    <div className='Active-Cart'>
      <div>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Customer Name</TableCell>
                <TableCell align="right">Delivery date</TableCell>
                <TableCell align="right">Payment mode</TableCell>
                <TableCell align="right">Door</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>

              <TableRow

              >
                <TableCell component="th" scope="row">

                </TableCell>
                <TableCell align="right">No data</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default ArchiveCart
