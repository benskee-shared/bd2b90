import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';
import SingleImage from './SingleImage';
import { MultipleImages } from '.';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: '30px'
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginTop: 5,
  },
  text: {
    fontSize: 14,
    color: '#91A3C0',
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: 'bold',
  },
  bubble: {
    background: '#F0F5F9',
    borderRadius: '10px 10px 0 10px',
  },
  singleImage: {
    borderRadius: '0 0 0 10px',
    minWidth: '150px'
  },
  avatar: {
    height: 20,
    width: 20,
    marginTop: 5,
  },
}));

const SenderBubble = ({ time, images, text, user }) => {
  const classes = useStyles();
  const hasSingleImage = images && images.length === 1
  const hasMultipleImages = images && images.length > 1

  return (
    <Box className={classes.root}>
      {!hasMultipleImages && <Typography className={classes.date}>{time}</Typography>}
      {hasSingleImage && <SingleImage hasText={!!text} imageUrl={images[0]} isSender={true} />}
      {text && <Box className={hasSingleImage ? `${classes.bubble} ${classes.singleImage}` : classes.bubble}>
        <Typography className={classes.text}>{text}</Typography>
      </Box>}
      {hasMultipleImages && <><MultipleImages images={images} isSender={true} /><Typography className={classes.date}>{time}</Typography></>}
      {images && <Avatar
        alt={user.username}
        src={user.photoUrl}
        className={classes.avatar}
      />}
    </Box>
  );
};

export default SenderBubble;
