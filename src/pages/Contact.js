import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Call, Mail, SupportAgent } from '@mui/icons-material'

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5, ml: 10, '& h4': { fontWeight: 'bold', mb: 2 } }}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quod,
          suscipit, aperiam totam autem culpa cum eveniet dolorum quasi est
          perspiciatis laborum. Nam recusandae nihil quia odio voluptatibus
          facere omnis facilis rerum? Ab eum beatae nobis reiciendis, qui
          temporibus aliquid, nesciunt velit sed quam recusandae necessitatibus,
          tempora maxime. Repellendus incidunt, maxime labore dolorum eos
          aperiam unde? At veritatis nesciunt eos quas cupiditate blanditiis est
          quam maiores, amet, soluta exercitationem voluptatum, veniam
          assumenda? Ratione perferendis officiis deserunt nostrum aspernatur
          sed asperiores! Earum sunt placeat ducimus sint, deleniti amet esse
          saepe voluptatem commodi laudantium quibusdam repellat nobis libero at
          consectetur adipisci ipsa.
        </p>
      </Box>
      <Box sx={{
        m: 3, width: '600px', ml: 10, '@media (max-width:600px)': {
          width: '300px'
        }
      }}>
        <TableContainer component={Paper}>
          <Table aria-label='contact table'>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor: 'black', color: 'white', }} align='center'>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgent sx={{ color: 'red', pt: 1 }} /> 1800-00-0000 (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Mail sx={{ color: 'skyblue', pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Call sx={{ color: 'green', pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
