import React from 'react'
import { makeStyles, Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  gridContainer: {
      flexDirection: "column",
      paddingTop:"5rem",
      height: "100vh",
      backgroundImage: "linear-gradient(rgba(58, 141, 255,.8), rgba(58, 141, 255,.8)), url(/assets/bg-img.png)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
        [theme.breakpoints.up("sm")]: {
            display: "flex",
      },
    },
  text: {
      marginTop: "5vh",
      color: "white",
      fontSize: "2rem",
      textAlign: "center"
  },
  bubble: {
    height: "5rem",
  }

}));

const WelcomeImage = () => {
  const classes = useStyles()
  return (
      <Grid container item sm={5} className={classes.gridContainer}>
            <img src="/assets/bubble.svg" alt="conversation bubble" className={classes.bubble}/>
            <p className={classes.text}>
                Converse with anyone<br/>
                with any language
            </p>
      </Grid>
  )
}

export default WelcomeImage