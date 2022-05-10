import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Avatar } from '@material-ui/core';
import MessageBody from './MessageBody';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    marginBottom: 30,
    maxWidth: "40%"
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  usernameDate: {
    fontSize: 11,
    color: '#BECCE2',
    fontWeight: 'bold',
    marginBottom: 2,
  },
}));

const OtherUserBubble = ({ text, time, otherUser, images }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Avatar
        alt={otherUser.username}
        src={otherUser.photoUrl}
        className={classes.avatar}
      />
      <Box>
        <Typography className={classes.usernameDate}>
          {otherUser.username} {time}
        </Typography>
        <MessageBody images={images} text={text} isSender={false} />
      </Box>
    </Box>
  );
};

export default OtherUserBubble;
