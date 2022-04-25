import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import WelcomeImage from './components/WelcomePages/WelcomeImage';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { WelcomeBanner } from './components/WelcomePages/WelcomeBanner';
import { TextFieldGroup } from './components/WelcomePages/TextFieldGroup';
import { SubmitButton } from './components/WelcomePages/SubmitButton';

const useStyles = makeStyles((theme) => ({
  main: {
    height: '100%',
    maxHeight: '100vh',
  },
  loginContainer: {
    display: 'block',
  },
  welcomeText: {
    fontWeight: "900",
    textShadow: "1px 0",
    fontSize: "2rem"
  },
  loginForm: {
    width: "90%",
    padding: "5rem",
    display: "flex",
    flexDirection: "column",
  },
}));

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container className={classes.main}>
      <WelcomeImage />
      <Grid container item sm={7} className={classes.loginContainer}>
        <WelcomeBanner text="Don't have an account?" link="/register" buttonLabel="Create account" />
        <Grid container item className={classes.loginForm}>
          <Typography variant="h5" className={classes.welcomeText}>Welcome back!</Typography>
          <form onSubmit={handleLogin} autoComplete="off">
            <Grid>
              <TextFieldGroup name="username"/>
              <TextFieldGroup name="password" type="password" />
              <SubmitButton label="Login"/>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
