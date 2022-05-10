import React from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@material-ui/core';


function UploadImageButton( { handleImageChange }) {
  return (
    <label htmlFor="icon-button-file">
        <input hidden accept="image/*" id="icon-button-file" type="file" multiple="multiple" onChange={handleImageChange}/>
        <IconButton color="primary" aria-label="upload picture" component="span" >
        <ContentCopyIcon />
        </IconButton>
    </label>
  )
}

export default UploadImageButton