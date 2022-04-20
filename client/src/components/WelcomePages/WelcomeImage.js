import React from 'react'
import { makeStyles, Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  gridContainer: {
      maxWidth: "425px",
      flexDirection: 'column',
      backgroundImage: 'linear-gradient(rgba(58, 141, 255,.8), rgba(58, 141, 255,.8)), url(/assets/bg-img.png)',
      backgroundRepeat: "no-repeat",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
      },
    },
  text: {
      marginTop: '5vh',
      marginBottom: '15vh',
      color: 'white',
      fontSize: 30,
      textAlign: "center"
  }
}));

const WelcomeImage = () => {
  const classes = useStyles()
  return (
      <Grid container item sm={5} className={classes.gridContainer}>
            <img src="/assets/bubble.svg" alt="conversation bubble"/>
            <p className={classes.text}>
                Converse with anyone<br/>
                with any language
            </p>
      </Grid>
  )
}

export default WelcomeImage