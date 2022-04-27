import './form.css';
import React from 'react';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

export default function FormName (props) {
  const { register, handleSubmit } = useForm();
  const { handleChange } = props;
  const onSubmit = (data) => {
    handleChange(data);
  };
  // console.log(watch('example')); // watch input value by passing the name of it
  return (
    <form className="box-input" onSubmit={handleSubmit(onSubmit)}>
      <TextField label="First Name" variant="outlined" id="firstName" type="text" {...register('firstName', { required: true, maxLength: 50 })} />
      <Button variant="contained" type="submit" color="secondary">submit</Button>
    </form>
  );
}
FormName.propTypes = { handleChange: PropTypes.func };
FormName.defaultProps = { handleChange: 'Rahul' };
