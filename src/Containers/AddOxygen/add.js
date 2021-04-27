import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Linking,
    TouchableOpacity, ScrollView
} from 'react-native';
import axios from 'axios';
const AddOxy = ({ navigation }) => {

    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [address, setAddress] = useState('')


    const register = () => {
        let user = new FormData();
        user.append("first_Name", firstName)
        user.append("last_Name", firstName)
        user.append("email", email)
        user.append("password", password)
        user.append("password_Confirm", confirmPassword)
        user.append("address", address)
        user.append("isAdmin", 'false')
        user.append("dateOfBirth", '04/04/2021')
        user.append("phone_Number", phoneNumber)


        axios.post('http://10.0.2.2:3000', user, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then((response) => {

                navigation.navigate('SignIn')
            }, (error) => {
                console.log(error);

            });
    }


    return (
        <ScrollView>


            <View style={styles.container}>
                <Text style={styles.logo}>Inscription</Text>
                <Text style={styles.SignUpText}>Ajouter vos détaille por vous s'inscrire</Text>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Nom"
                        placeholderTextColor="#7f8c8d"
                        onChangeText={text => setfirstName(text)} />
                </View>
                <View style={styles.inputView} >
                    <TextInput

                        style={styles.inputText}
                        placeholder="Email"
                        placeholderTextColor="#7f8c8d"
                        onChangeText={text => setemail(text)} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        style={styles.inputText}
                        placeholder="Numéro téléphone"
                        placeholderTextColor="#7f8c8d"
                        onChangeText={text => setphoneNumber(text)} />
                </View>
                <View style={styles.inputView} >
                    <TextInput

                        style={styles.inputText}
                        placeholder="Adresse"
                        placeholderTextColor="#7f8c8d"
                        onChangeText={text => setAddress(text)} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Mot de passe"
                        placeholderTextColor="#7f8c8d"
                        onChangeText={text => setpassword(text)} />
                </View>
                <View style={styles.inputView} >
                    <TextInput
                        secureTextEntry
                        style={styles.inputText}
                        placeholder="Confirmez Mot de passe"
                        placeholderTextColor="#7f8c8d"
                        onChangeText={text => setconfirmPassword(text)} />
                </View>
                <TouchableOpacity style={styles.loginBtn} onPress={register}>
                    <Text style={styles.loginText}>sinscrire</Text>
                </TouchableOpacity>

                <Text style={styles.signUpText2}>Vous avez déja un compte ?         <Text style={{ color: 'blue' }}
                    onPress={() => navigation.navigate('SignIn')}>
                    Se connecter</Text>
                </Text>
            </View>
        </ScrollView>
    )
}
export default AddOxy
const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 30
    },
    logo: {
        fontSize: 38,
        color: "#34495e",
        marginTop: 30
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
        color: 'black'
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#EA3000",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10
    },
    loginText: {
        color: "#ecf0f1"
    },
    SignUpText: {
        color: "#718093",
        marginBottom: 40,
        marginTop: 30
    }, SignUpText2: {
        color: "#718093",
        marginBottom: 40,
        marginTop: 30
    },
})