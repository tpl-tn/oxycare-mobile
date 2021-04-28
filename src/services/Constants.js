import { Platform } from 'react-native'
import Config from 'react-native-config'



const constants = {
  ENV:Config.ENV,
  version:Config.version,
  webClientIdGoogle:Config.webClientId,
  ApiUrl:Config.serveurUrl
}

export default Object.freeze({ ...defaults, ...constants })
