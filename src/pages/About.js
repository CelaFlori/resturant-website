import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my: 15,
        textAlign: 'center',
        p: 2,
        '& h4': {
          fontWeight: 'bold ',
          my: 2,
          fontSize: '2rem'
        },
        '& p': {
          textAlign: 'justify',
        },
        '@media (max-width:600px)': {
          mt: 0,
          '& h4': {
            fontSize: '1.5rem'
          }
        }
      }}>
        <Typography variant='h4'>Welcome To My Resturant</Typography>
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
        <br />
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
    </Layout>
  )
}

export default About
