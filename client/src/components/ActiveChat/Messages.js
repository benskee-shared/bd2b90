import React from 'react';
import { Box } from '@material-ui/core';
import { SenderBubble, OtherUserBubble } from '.';
import moment from 'moment';

const Messages = (props) => {
  const { messages, otherUser, user } = props;

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format('h:mm');

        return message.senderId === user.id ? (
          <SenderBubble key={message.id} images={message.attachments} text={message.text} time={time} user={user}/>
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            images={message.attachments}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
