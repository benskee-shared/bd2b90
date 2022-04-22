import React, { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { FormControl, FilledInput, IconButton } from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: 'flex-end',
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: '#F0F5F9',
    borderRadius: 8,
    marginBottom: 20,
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [images, setImages] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (e) => {
    setImages(e.target.files)
  }

  const uploadToCloudinary = async (file) => {
    const body = new FormData()
    body.append('file', file)
    body.append("upload_preset", "ml_default")
    const instance = axios.create()
    try {
      const { data } = await instance.post("https://api.cloudinary.com/v1_1/benskeedev/image/upload", body)
      return data.url
    } catch(err) {
      console.error(err);
      return "Error"
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const attachments = [];
    for (const key of Object.keys(images)) {
      const imageUrl = await uploadToCloudinary(images[key])
      if (imageUrl !== "Error") attachments.push(imageUrl)
    }
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      attachments,
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
    };
    await postMessage(reqBody);
    setText('');
    setImages('');
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>

        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
          <label htmlFor="icon-button-file">
          <input hidden accept="image/*" id="icon-button-file" type="file" multiple="multiple" onChange={handleImageChange}/>
          <IconButton color="primary" aria-label="upload picture" component="span" >
            <ContentCopyIcon />
          </IconButton>
        </label>
          }
        >
        </FilledInput>
      </FormControl>
    </form>
  );
};

export default Input;
