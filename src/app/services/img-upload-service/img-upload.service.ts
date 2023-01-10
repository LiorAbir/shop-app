import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ImgUploadService {
  constructor() {}

  public uploadImg = async (file: object) => {
    const UPLOAD_PRESET = 'lior-cloud';
    const CLOUD_NAME = 'lior-cloud';
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const FORM_DATA = new FormData();

    // Building the request body
    FORM_DATA.append('file', file as any);
    FORM_DATA.append('upload_preset', UPLOAD_PRESET);
    // Sending a post method request to Cloudniarys' API
    try {
      const res = await axios.post(UPLOAD_URL, FORM_DATA);
      return res.data;
    } catch (err) {
      console.error('ERROR!', err);
    }
  };
}
