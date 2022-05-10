import React, { useState } from 'react';
import { FormControl, FilledInput, FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImagePreview from './ImagePreview';
import saveImage from './../../cloudinaryRoutes';
import UploadImageButton from './UploadImageButton';

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
  error: {
    fontSize: 16,
    textAlign: "right",
    margin: 10,
  }
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState('');
  const [images, setImages] = useState('');
  const [error, setError] = useState(null);
    

  const handleChange = (event) => {
    setText(event.target.value);
    setError(null)
  };

  const handleImageChange = (e) => {
    setImages(e.target.files)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    let attachments = [];

    if(images) {
      const promises = Object.keys(images).map(key => saveImage(images[key]))
      
      const results = await Promise.all(promises)
      if (results.includes('Error')) {
        setError('Something went wrong uploading your image. Please try again.')
      } else {
        attachments = [...results]
      }
    }
    
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
    <form className={classes.root} onSubmit={handleSubmit} autoComplete='off'>
      {images && <ImagePreview images={images} />}
      {error && <FormHelperText className={classes.error} error >{error}</FormHelperText>}
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <UploadImageButton handleImageChange={handleImageChange} />
          }
        >
        </FilledInput>
      </FormControl>
    </form>
  );
};

export default Input;
