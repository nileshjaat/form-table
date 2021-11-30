import React, { useState } from 'react';
import './Form.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
};
const Form = ({ saveDataInfo, tableData }) => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    if (
      formValues.firstName !== '' &&
      formValues.lastName !== '' &&
      formValues.email !== ''
    ) {
      e.preventDefault();

      if (tableData?.length > 0) {
        saveDataInfo([...tableData, formValues]);
      } else {
        saveDataInfo([formValues]);
      }
      setFormValues({
        ...formValues,
        firstName: '',
        lastName: '',
        email: '',
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <TextField
              id="first-name-input"
              name="firstName"
              label="Firstname"
              type="text"
              value={formValues.firstName}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item>
            <TextField
              id="last-name-input"
              name="lastName"
              label="Lastname"
              type="text"
              value={formValues.lastName}
              onChange={handleInputChange}
            />
          </Grid>

          <Grid item>
            <TextField
              id="email-input"
              name="email"
              label="Email"
              type="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
          </Grid>

          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="submit-button"
          >
            Submit
          </Button>
        </Grid>
      </form>
    </>
  );
};
export default Form;
