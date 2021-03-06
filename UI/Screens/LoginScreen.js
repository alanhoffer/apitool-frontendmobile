import {View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, ScrollView, Alert } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState,useContext  } from 'react';
import * as verify from '../../module/Verifing/Verifing';
import AuthContext from '../../module/Auth/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { UIColors } from '../UIColors';

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

                            <Text style={styles.title}>INICIA SESI??N</Text>
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
                                    placeholder="Contrase??a"
                                />
                                <Text style={(password != null) ? [styles.error, {display:'flex'}]:styles.error}>{passwordWrong ? "" : "Contrase??a incorrecta"}</Text>
                                <Text style={styles.passwordLoss} onPress={() => 
                                Alert.alert('Estamos trabajando en esta seccion, apitoolhelp@gmail.com')}>Perdiste la contrase??a?</Text>
                            </View>
                        </View>
                        <Pressable style={styles.loginbutton}onPress={() => handleLogin(username, password)} >
                                <Text>Iniciar sesi??n</Text>
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
        color: UIColors.light_black,
    },  
    subtitle:  {
        marginBottom: hp('5%'),
        width: wp('90%'),
        fontSize: wp('4%'),
        fontWeight: 'bold',
        color: UIColors.light_grey,
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
        borderColor: UIColors.light_black,
        color: UIColors.light_black,
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
