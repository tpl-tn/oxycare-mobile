import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyleSheet, Text, View, TextInput, Linking, TouchableOpacity, ScrollView, Alert } from 'react-native';
import axios from 'axios';


const IndexExampleContainer = ({ navigation }) => {
    const [userId, setUserId] = useState('1')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [userToken, setUserToken] = useState('')



    const logIn = () => {
        navigation.navigate('Home')
        let user = {
            email: username,
            password: password
        }
        axios.post('http://10.0.2.2:3000', user)
            .then((response) => {

                setIsLoading(true)
                setIsAuthorized(true)
                //navigation.navigate('Package')

            }, (error) => {
                console.log(error);
                setIsLoading(false)
                setIsAuthorized(false)
            });



    }



    return (
        <ScrollView  >
            <View style={styles.container}>
                {/*}  <View style={styles.container2}>
        <TouchableOpacity
          style={styles.lightBtn}
          onPress={() => changeTheme({ darkMode: false })}>
          <Text style={Fonts.textRegular}>L</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.darkBtn}
          onPress={() => changeTheme({ darkMode: true })}
        >
          <Text style={Fonts.textRegular}>D</Text>
        </TouchableOpacity>
      </View>
  */}
                <Text style={styles.logo}>Se Connecter</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Email..."
                        placeholderTextColor="#7f8c8d"
                        onChangeText={text => setUsername(text)}
                    />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Password..."
                        placeholderTextColor="#7f8c8d"
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                <TouchableOpacity onPress={logIn}
                    style={styles.loginBtn}>
                    <Text style={styles.loginText}>se connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() =>
                    navigation.navigate('Reset')
                }>
                    <Text style={styles.forgot}>Mot de passe oublié ?</Text>
                </TouchableOpacity>

                <Text style={styles.signup}>Ou connecter vous avec</Text>

                <TouchableOpacity style={styles.loginBtnFacebook}>
                    <Text style={styles.loginText}>se connecter avec Facebook</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginBtnGoogle}>
                    <Text style={styles.loginText}>se connecter avec Google</Text>
                </TouchableOpacity>
                <Text style={styles.signUpText}>Vous n'avez pas de compte ?         <Text style={{ color: 'blue' }}
                    onPress={() =>
                        navigation.navigate('SignUp')
                    }>
                    Inscrivez vous</Text>
                </Text>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        fontSize: 38,
        color: "#fff",
        marginBottom: 60,
        marginTop: 60
    },
    inputView: {
        width: "80%",
        backgroundColor: "#ecf0f1",
        borderRadius: 25,
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        padding: 20
    },
    inputText: {
        height: 50,
        color: "#34495e"
    },
    forgot: {
        color: "#fff",
        fontSize: 15
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#EA3000",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 40
    },
    loginText: {
        color: "#ecf0f1"
    },
    loginBtnFacebook: {
        width: "80%",
        backgroundColor: "#3b5998",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 2
    }, loginBtnGoogle: {
        width: "80%",
        backgroundColor: "#e55039",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginBottom: 20
    }, signup: {
        marginTop: "10%",
        color: "#34495e",
        fontSize: 18
    },
    signUpText: {
        color: "#34495e",
        marginBottom: 180
    }, container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',

    },
    lightBtn: {
        width: "20%",
        backgroundColor: "#aaa",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    }, darkBtn: {
        width: "20%",
        backgroundColor: "#EA3000",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
    },

});

export default IndexExampleContainer
