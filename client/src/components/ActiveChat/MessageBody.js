import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import SingleImage from './SingleImage';
import MultipleImages from './MultipleImages';

const useStyles = makeStyles(() => ({
  bubble: {
    padding: 5,
    '&.otherUser': {
      backgroundImage: 'linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)',
      borderRadius: '0 10px 10px 10px',
    },
    '&.sender': {
      background: '#F0F5F9',
      borderRadius: '10px 10px 0 10px',
      maxWidth: '40%'
    }
  },
  singleImage: {
    width: 150,
    '&.otherUser': {
      borderRadius: '0 0 10px 10px',
      marginTop: -5
    },
    '&.sender': {
      borderRadius: '0 0 0 10px',
    }
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: -0.2,
    padding: 8,
    '&.otherUser': {
     color: '#FFFFFF',
    },
    '&.sender': {
     color: '#91A3C0',
    }
  },
}))

function MessageBody( {images, text, isSender } ) {
  const classes = useStyles();
  const hasSingleImage = images && images.length === 1
  const hasMultipleImages = images && images.length > 1
  const senderClass = (isSender ? 'sender' : 'otherUser')
  return (
    <>
        {hasSingleImage && <SingleImage hasText={!!text} imageUrl={images[0]} isSender={isSender} />}
        {text && <Box className={`${classes.bubble} ${senderClass} ${hasSingleImage ? classes.singleImage : ''}`}>
            <Typography className={`${classes.text} ${senderClass}`}>{text}</Typography>
        </Box>}
        {hasMultipleImages && <MultipleImages images={images} isSender={isSender} />}
    </>
  )
}

export default MessageBody