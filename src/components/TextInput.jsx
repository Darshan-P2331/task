import { TextField } from '@mui/material'
import React from 'react'

const TextInput = ({ value, onChange, onBlur,label,err,type,helper,name }) => {
  return (
    <TextField fullWidth margin="dense" error={err} type={type} helperText={helper} label={label} name={name} variant="filled" value={value} onChange={onChange} onBlur={onBlur} />
  )
}

export default TextInput