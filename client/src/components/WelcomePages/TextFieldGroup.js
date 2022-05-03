import React from 'react'
import { FormControl, TextField, makeStyles, FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
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
    },
    inputText: {
      paddingTop: 15,
      fontSize: 20,
      [theme.breakpoints.down('sm')]: {
        paddingTop: 10,
        fontSize: 14,
      }
    },
    labelText: {
      fontSize: 22,
      [theme.breakpoints.down('sm')]: {
        fontSize: 14,
      }
    }
}));

export const TextFieldGroup = ({ name, label=name, type="text", minLength=0, error=null }) => {
  const classes = useStyles();
  const textLabel = `${label[0].toUpperCase()}${label.slice(1)}`

  return (
     <FormControl margin="normal" required fullWidth error={!!error}>
        <TextField
        classes={{ root: classes.root}}
        aria-label={label}
        label={textLabel}
        inputProps={{ minLength, className: classes.inputText }}
        InputLabelProps={{ required: false, className: classes.labelText }}
        name={name}
        type={type}
        color="secondary"
        required
        />
        {error ? <FormHelperText>{error}</FormHelperText> : null}
    </FormControl>
  )
}
