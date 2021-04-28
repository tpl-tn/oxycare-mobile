import React, { Component } from "react";
import { ImageBackground, Text, View, StyleSheet ,TouchableOpacity, SafeAreaView} from "react-native";
import backgroundimg from "../../../Assets/Images/backgroundimg.png";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import Styles from './styles';
GoogleSignin.configure();
GoogleSignin.configure({
  scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
  webClientId:
    "293476204423-hofl4dfk643rbcmq263ui72rln7t7v15.apps.googleusercontent.com", // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: "", // specifies a hosted domain restriction
  loginHint: "", // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: "", // [Android] specifies an account name on the device that should be used
  iosClientId: "<FROM DEVELOPER CONSOLE>", // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: "", // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
});
export default class AuthModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: null,
      error: null,
    };
  }
  componentDidMount() {
    //  this.signOut()
  }

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ user: null }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      this.setState({ userInfo, error: null });
    } catch (error) {
      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          // sign in was cancelled
          Alert.alert("cancelled");
          break;
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          Alert.alert("in progress");
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // android only
          Alert.alert("play services not available or outdated");
          break;
        default:
          Alert.alert("Something went wrong", error.toString());
          this.setState({
            error,
          });
      }
    }
  };
  render() {
    return (
      <SafeAreaView style={{ flex: 1 ,backgroundColor:"white"}}>
        <ImageBackground style={Styles.backgroundImage} source={backgroundimg}>
          <View
            style={Styles.container}
         SafeAreaView >
           
              <TouchableOpacity  style={Styles.ButtonCansel}>

             
              <Text style={Styles.textCansel}>X</Text>
              </TouchableOpacity>
            

            <GoogleSigninButton
              style={{ width: 250, height: 60 }}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={this._signIn}
            />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}


