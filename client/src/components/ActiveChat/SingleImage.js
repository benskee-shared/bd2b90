import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    otherUser: {
        borderRadius: "0 10px 10px 10px",
        marginTop: 5
    },
    sender: {
        borderRadius: "10px 10px 0 10px",
        marginTop: 5
    },
    withText: {
        borderBottomLeftRadius: '0',
        borderBottomRightRadius: '0',
        marginTop: 5
    },
}))

const SingleImage = ({ imageUrl, hasText, isSender }) => {
    const classes = useStyles()
    const height = hasText ? '120' : '150'
    const baseUrl = `http://res.cloudinary.com/benskeedev/image/upload/c_fill,w_150,h_${height}/`
    const image = baseUrl + imageUrl.split('upload/')[1]
  return (
        <img className={`${isSender ? classes.sender : classes.otherUser} ${hasText ? classes.withText : null}`} src={image} alt="message" />
  )
}

export default SingleImage