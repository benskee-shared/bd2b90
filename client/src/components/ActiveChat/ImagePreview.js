import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';


const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: "right",
        marginBottom: 10,
    },
    previewImage: {
        height: 50,
        width: 50,
        marginRight: 15,
        borderRadius: 5,
    }
}))

function ImagePreview( { images }) {
        const classes = useStyles()
        const [imagesList, setImagesList] = useState([])

        useEffect(() => {
            const tempList = []
            for(let x=0; x<images.length; x++) {
                tempList.push(URL.createObjectURL(images[x]))
            }
            setImagesList(tempList)
        }, [images])
  return (
    <Box className={classes.root}>
        {imagesList.map(image => <img key={image} src={image} alt="upload preview" className={classes.previewImage} />)}
    </Box>
  )
}

export default ImagePreview