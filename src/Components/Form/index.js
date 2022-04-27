import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Form () {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch('example')); // watch input value by passing the name of it
  return (
    <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '35ch', display: 'flex' } }} noValidate autoComplete="off">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField label="First Name" variant="outlined" id="firstName" type="text" {...register('firstName', { required: true, maxLength: 50 })} />
        <Button variant="contained" type="submit" color="secondary">submit</Button>
      </form>
    </Box>

  );
}
