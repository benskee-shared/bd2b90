import React from 'react'
import { FormControl, TextField, makeStyles, FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        '.MuiInputLabel-asterisk': {
          color: "red"
      },
      '& .MuiInput-underline': {
        '&:before': {
            borderColor: "rgba(0, 0, 0, 0.15)",
        },
        '&:after': {
            borderColor: theme.palette.primary.main,
        },
        '&:hover:not(.Mui-disabled):before': {
            borderColor: theme.palette.primary.main
        }
      },
    }
}));

export const WelcomeInput = ({ name, label=name, type="text", minLength=0, error=null }) => {
  const classes = useStyles();
  const textLabel = `${label[0].toUpperCase()}${label.slice(1)}`

  return (
     <FormControl margin="normal" required fullWidth error={!!error}>
        <TextField
        classes={{ root: classes.root}}
        aria-label={label}
        label={textLabel}
        inputProps={{ minLength }}
        InputLabelProps={{ required: false }}
        name={name}
        type={type}
        color="secondary"
        required
        />
        {error ? <FormHelperText>{error}</FormHelperText> : null}
    </FormControl>
  )
}
