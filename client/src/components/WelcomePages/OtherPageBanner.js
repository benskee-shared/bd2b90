import React from 'react'
import { Link } from 'react-router-dom';
import {
  Grid,
  Box,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  otherPageContainer: {
    margin: "1rem",
    marginRight: "2rem"
  },
  otherPageText: {
    marginTop: "1rem",
    color: theme.palette.secondary.main
  },
  otherPageLink: {
    textDecoration: "none"
  },
  otherPageButton: {
    marginLeft: "1rem",
    padding: "15px 35px",
    boxShadow: "1px 5px 5px 0 #e9ecef"
  }
}));


export const OtherPageBanner = ({ text, link, buttonLabel}) => {
  const classes = useStyles();
  return (
    <Grid container item justifyContent="flex-end" className={classes.otherPageContainer}>
        <Typography className={classes.otherPageText}>{text}</Typography>
        <Box>
        <Link href={link} to={link} className={classes.otherPageLink}>
            <Button variant="text" color="primary" className={classes.otherPageButton}>
                {buttonLabel}
            </Button>
        </Link>
        </Box>
    </Grid>
  )
}
