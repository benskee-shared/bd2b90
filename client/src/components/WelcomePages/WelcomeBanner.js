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
    marginRight: "4vw",
    [theme.breakpoints.down('sm')]: {
      justifyContent: "center",
      marginRight: "1rem",
    },
  },
  bannerText: {
    marginTop: "1rem",
    color: theme.palette.secondary.main,
    fontWeight: "400",
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  bannerLink: {
    textDecoration: "none"
  },
  bannerButton: {
    marginLeft: "2vw",
    padding: "15px 50px",
    boxShadow: "1px 5px 5px #e6e9ed",
    '& .MuiButton-label': {
      fontWeight: "700",
      fontSize: 20,
    },
    [theme.breakpoints.down('sm')]: {
       marginTop: "10px",
       padding: "8px 25px",
       '& .MuiButton-label': {
        fontSize: 14,
      },
    },
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
