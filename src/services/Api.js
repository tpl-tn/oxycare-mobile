import axios from 'axios';

import { Platform } from 'react-native';

import Constants from './Constants'


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

const BaseUrl = new Api(Constants.ApiUrl);



export default {
  BaseUrl
};
