import React from 'react'
import { Box, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  submitButton: {
    width: '14rem',
    height: '5rem',
    marginTop: "3rem",
    '& .MuiButton-label': {
      fontWeight: "900",
      fontSize: "1.3rem",
    }
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
