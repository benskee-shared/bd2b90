import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import MessageBody from './MessageBody';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: 30,
  },
  date: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 2
  },
}));

const SenderBubble = ({ time, images, text }) => {
  const classes = useStyles();
  const hasMultipleImages = images && images.length > 1

  return (
    <Box className={classes.root}>
      {!hasMultipleImages && <Typography className={classes.date}>{time}</Typography>}
      <MessageBody images={images} text={text} isSender={true} />
      {hasMultipleImages && <Typography className={classes.date}>{time}</Typography>}
    </Box>
  );
};

export default SenderBubble;
