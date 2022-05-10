import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    otherUser: {
        borderRadius: "0 10px 10px 10px",
    },
    sender: {
        borderRadius: "10px 10px 0 10px",
    },
    withText: {
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
    },
}))

const SingleImage = ({ imageUrl, hasText, isSender }) => {
    const classes = useStyles()
    const height = hasText ? '120' : '150'
    const baseUrl = `${process.env.REACT_APP_CLOUDINARY_GET_URL}w_150,h_${height}/`
    const image = baseUrl + imageUrl.split('upload/')[1]
  return (
        <img className={`${isSender ? classes.sender : classes.otherUser} ${hasText ? classes.withText : null}`} src={image} alt="message" />
  )
}

export default SingleImage