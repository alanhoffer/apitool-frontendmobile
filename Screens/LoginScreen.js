import {View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView, Alert } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState,useContext, useRef, useEffect  } from 'react';
import * as verify from '../module/verifing/Verifing';
import AuthContext from '../module/auth/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

export default function LoginScreen({navigation}){

    // VARIABLES

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    const [usernameWrong, setUsernameWrong] = useState(false);
    const [passwordWrong, setPasswordWrong] = useState(false);
    const {isLoading, login} = useContext(AuthContext);



    // FUNCTIONS


    // CHECK IF USERNAME AND PASSWORD ARE CORRECT
    const handleUsername = (text) => {
        if(verify.username(text)){
            setUsername(text);
            setUsernameWrong(true);
        }
        else{
        setUsernameWrong(false);
        setUsername(text);
        }
    }

    const handlePassword = (text) => {
        if(verify.password(text)){
            setPassword(text);
            setPasswordWrong(true);
        }
        else{
        setPassword(text);
        setPasswordWrong(false);
        }
    }
    // LOGIN
    const handleLogin = (username, password) => {
        if(usernameWrong && passwordWrong === true){
            login(username, password);
        }
        else{
            Alert.alert("Llena todos los campos")
        }
    }


    // RETURN
    return(
        <SafeAreaView style={styles.container}>
            <Spinner visible={isLoading} />
            <ScrollView 
            contentContainerStyle={styles.scrollView}
            >
                        <Icon style={styles.back} name="arrow-back-outline" onPress={() => navigation.goBack()} />
                        <View>

                            <Text style={styles.title}>INICIA SESIÓN</Text>
                            <Text style={styles.subtitle}>Bienvenido de nuevo!</Text>
                        </View>
                        <View>
                            <View style={styles.input_container}>
                                <Text>Usuario</Text>
                                <TextInput
                                    autoFocus={true}
                                    style={styles.input}
                                    onChangeText={handleUsername}
                                    value={username}
                                    autoCapitalize="none"
                                    placeholder="example@email.com"
                                />
                                <Text style={(username != null) ? [styles.error, {display:'flex'}]:styles.error}>{usernameWrong ? "" : "Usuario incorrecto"}</Text>
                            </View>
                            <View style={styles.input_container}>
                                <TextInput
                                    secureTextEntry={true} 
                                    style={styles.input}
                                    onChangeText={handlePassword}
                                    value={password}
                                    autoCapitalize="none"
                                    placeholder="Contraseña"
                                />
                                <Text style={(password != null) ? [styles.error, {display:'flex'}]:styles.error}>{passwordWrong ? "" : "Contraseña incorrecta"}</Text>
                                <Text style={styles.passwordLoss} onPress={() => 
                                Alert.alert('Estamos trabajando en esta seccion, apitoolhelp@gmail.com')}>Perdiste la contraseña?</Text>
                            </View>
                        </View>
                        <Pressable style={styles.loginbutton}onPress={() => handleLogin(username, password)} >
                                <Text>Iniciar sesión</Text>
                        </Pressable>
                        
                        <Text style={styles.nothaveaccount} onPress={() => navigation.navigate('RegisterScreen')}>No tienes cuenta? Registrate</Text>
                        </ScrollView>
        </SafeAreaView>
    )
    
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    scrollView:{
        paddingTop:50, 
        paddingHorizontal:20
    },
    back:{
        fontSize:30,
        color:'black'
    },
    title: {
        width: wp('90%'),
        fontSize: wp('5%'),
        marginTop: hp('8%'),
        fontWeight: 'bold',
        color: '#3D3E3E',
    },  
    subtitle:  {
        marginBottom: hp('5%'),
        width: wp('90%'),
        fontSize: wp('4%'),
        fontWeight: 'bold',
        color: '#9A9A9A',
    },
    icon: {
        display: 'none',
        position: 'relative',
        right: 1,
        top: hp('2.5%'),
      },
    input: {
        height: 40,
        borderBottomWidth: 1,
      },
    input_container: {
        width: wp('90%'),
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
    },
    loginbutton: {
        alignItems: 'center',
        paddingVertical: hp('2%'),
        marginTop: hp('4%'),
        paddingHorizontal: wp('30%'),
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#424242",
        color: '#3D3E3E',
      },
    passwordLoss:  {
        fontSize: wp('4%'),
        marginTop: hp('2%'),
        textAlign: 'right',
    },
    nothaveaccount:  {
        marginTop: hp('20%'),
        fontSize: wp('4%'),
        textAlign: 'center',
    },
    error: {
        display:'none',
        color: 'red',
        fontSize: wp('3%'),
        marginTop: hp('1%'),
    }

})
