import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { TextFieldGroup } from './components/WelcomePages/TextFieldGroup';
import WelcomeImage from './components/WelcomePages/WelcomeImage';
import { SubmitButton } from './components/WelcomePages/SubmitButton';
import { WelcomeBanner } from './components/WelcomePages/WelcomeBanner';

const useStyles = makeStyles((theme) => ({
  main: {
    height: '100%',
    maxHeight: '100hv',
  },
  registerContainer: {
    display: 'block',
  },
  welcomeText: {
    fontWeight: "700",
    fontSize: 40,
    [theme.breakpoints.down('sm')]: {
      fontSize: 26,
    },
  },
  registerForm: {
    width: "90%",
    padding: "5rem",
    display: "flex",
    flexDirection: "column",
  },
}));


const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = useStyles();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container className={classes.main}>
      <WelcomeImage />
      <Grid container item sm={7} className={classes.registerContainer}>
        <WelcomeBanner text="Already have an account?" link="/login" buttonLabel="Login" />
        <Grid container item className={classes.registerForm}>
          <Typography variant="h5" className={classes.welcomeText}>Create an account.</Typography>
          <form onSubmit={handleRegister} autoComplete="off">
            <Grid>
              <TextFieldGroup name="username"/>
              <TextFieldGroup name="email" label="e-mail address" type="email" />
              <TextFieldGroup name="password" type="password" minLength={6} error={formErrorMessage.confirmPassword} />
              <TextFieldGroup name="confirmPassword" label="Confirm Password" type="password" minLength={6} error={formErrorMessage.confirmPassword} />
              <SubmitButton label="Create"/>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;