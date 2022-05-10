import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {  Grid } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 260,
  },
  senderImage: {
    borderRadius: '10px 10px 0 10px',
    margin: '10px 5px 0 5px',
  },
  otherUserImage: {
    borderRadius: '0 10px 10px 10px',
    margin: '10px 5px 0 5px',
  }
}))

const MultipleImages = ({ images, isSender }) => {
  const classes = useStyles()

  const addUrlParams = (url) => {
    const baseUrl = `${process.env.REACT_APP_CLOUDINARY_GET_URL}w_120,h_100/`
    return baseUrl + url.split('upload/')[1]
  }

  return (
  <Grid container className={classes.root}>
  {images.map((image) => (
      <Grid item key={image}>
        <img
          className={isSender ? classes.senderImage : classes.otherUserImage}
          src={addUrlParams(image)}
          alt="message"
        />
      </Grid>
  ))}
  </Grid>
  )
}

export default MultipleImages