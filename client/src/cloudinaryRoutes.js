import axios from 'axios';

const instance = axios.create()
const cloudinary_url = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL

const saveImage = async (file) => {
    const body = new FormData()
    body.append('file', file)
    body.append("upload_preset", "ml_default")
    try {
      const { data } = await instance.post(cloudinary_url, body)
      return data.url
    } catch(error) {
      console.error(error);
      return "Error"
    }
}

export default saveImage