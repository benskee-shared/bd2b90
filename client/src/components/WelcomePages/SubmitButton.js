import React from 'react'
import { Box, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  submitButton: {
    padding: "12px 50px",
    marginTop: "3rem",
  },
}));


export const SubmitButton = ({ label }) => {
  const classes = useStyles()
  return (
    <Box className={classes.buttonContainer}>
    <Button type="submit" variant="contained" className={classes.submitButton} size="large" color="primary" disableElevation>
        {label}
    </Button>
    </Box>
  )
}
