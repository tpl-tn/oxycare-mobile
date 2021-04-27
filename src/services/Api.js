import axios from 'axios';

import { Platform } from 'react-native';




class Api {
  constructor(baseURL, headers = {}) {
    this.api = axios.create({
      baseURL,
      headers: {
        'X-MOBILE-PLATFORM': Platform.OS,
        'X-MOBILE-VERSION': Platform.Version,
 
        ...headers,
      },
      timeout: 35 * 1000,
    });
  }

 


 

}

const BaseUrl = new Api("http://example.com");



export default {
  BaseUrl
};
