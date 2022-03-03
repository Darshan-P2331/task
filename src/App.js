import { Grid } from '@mui/material'
import React from 'react'
import { Route, Router } from 'react-router-dom'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    style={{minHeight: '100vh'}}
    >
      {/* <SignUp/> */}
      <Route exact path='/' component={SignUp} />
      <Route exact path='/login' component={LogIn} />
    </Grid>
  )
}

export default App