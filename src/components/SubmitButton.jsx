import { Button } from '@mui/material'
import React from 'react'

const SubmitButton = ({children}) => {
  return (
    <Button fullWidth style={{marginTop: "2rem"}} variant='contained' type="submit">{children}</Button>
  )
}

export default SubmitButton