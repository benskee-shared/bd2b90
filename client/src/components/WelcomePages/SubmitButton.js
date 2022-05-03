import React from 'react'
import { Box, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
  },
  submitButton: {
    padding: "15px 50px",
    marginTop: "3rem",
    '& .MuiButton-label': {
      fontWeight: "900",
      fontSize: 20,
    },
    [theme.breakpoints.down('sm')]: {
       padding: "8px 25px",
       '& .MuiButton-label': {
        fontSize: 14,
      },
    },
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
