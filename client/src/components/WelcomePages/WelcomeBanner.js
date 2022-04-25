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
  bannerContainer: {
    margin: "1rem",
    width: "auto",
    marginRight: "5rem",
    "@media only screen and (max-width: 600px)": {
      justifyContent: "center",
      marginRight: "1rem",
    }
  },
  bannerText: {
    marginTop: "1rem",
    color: theme.palette.secondary.main,
    fontWeight: "900",
    fontSize: "1.3rem",
  },
  bannerLink: {
    textDecoration: "none"
  },
  bannerButton: {
    marginLeft: "2rem",
    width:"12rem",
    height:"4rem",
    textShadow: "1px 0",
    boxShadow: "1px 5px 5px 3px #e9ecef",
    textSizeLarge: "2rem",
    '& .MuiButton-label': {
      fontWeight: "900",
      fontSize: "1.3rem",
    }
  }
}));


export const WelcomeBanner = ({ text, link, buttonLabel}) => {
  const classes = useStyles();
  return (
    <Grid container item justifyContent="flex-end" className={classes.bannerContainer}>
        <Typography className={classes.bannerText}>{text}</Typography>
        <Box>
        <Link href={link} to={link} className={classes.bannerLink}>
            <Button variant="text" color="primary" size="large" className={classes.bannerButton}>
                {buttonLabel}
            </Button>
        </Link>
        </Box>
    </Grid>
  )
}
