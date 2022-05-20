import {View, Text, StyleSheet, TextInput, Pressable , SafeAreaView, ScrollView, Alert } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';
import * as verify from '../../module/Verifing/Verifing';
import React, { useState, useContext  } from 'react';
import { AuthContext } from '../../module/Auth/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { UIColors } from '../UIColors';


export default function RegisterScreen({navigation}){

    // VARIABLES

    const [menu, setMenu] = useState('register_first_step');
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [city, setCity] = useState("Buenos Aires");


    const [usernameWrong, setUsernameWrong] = useState(false);
    const [emailWrong, setEmailWrong] = useState(false);
    const [passwordWrong, setPasswordWrong] = useState(false);
    const [nameWrong, setNameWrong] = useState(false);
    const [phoneWrong, setPhoneWrong] = useState(false);
    const [cityWrong, setCityWrong] = useState(false);

    const {isLoading,register} = useContext(AuthContext);



    // CHECK IF USERNAME AND PASSWORD ARE CORRECT
    const handleEmail = (text) => {
        if(verify.email(text)){
            setEmail(text);
            setEmailWrong(true);
        }
        else{
        setEmailWrong(false);
        setEmail(text);
        }
    }

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

    const handleName = (text) => {
        if(verify.name(text)){
            setName(text);
            setNameWrong(true);
        }
        else{
        setName(text);
        setNameWrong(false);
        }
        
    }
    const handlePhone = (text) => {
        if(verify.phone(text)){
            setPhone(text);
            setPhoneWrong(true);
        }
        else{
        setPhone(text);
        setPhoneWrong(false);
        }
        
    }


    const handleNextStep = () => {
        if(usernameWrong && emailWrong && passwordWrong === true){
            setMenu('register_second_step')
        }
        else{
            Alert.alert("Llena todos los campos")
        }
    }

    const handleRegister = () => {
        if(usernameWrong && emailWrong && passwordWrong && nameWrong && phoneWrong === true){
            register(username, email, password, name, phone, city);
        }
        else{
            Alert.alert("Llena todos los campos")
        }
    }


    if(menu === 'register_first_step'){
        return(
        <SafeAreaView style={styles.container}>
            <ScrollView 
            contentContainerStyle={{paddingTop:50, paddingHorizontal:20,}}
            >
                <Icon name="arrow-back-outline" style={styles.back} onPress={() => navigation.goBack()} />
                <View>
                    <Text style={styles.title}>REGISTRATE</Text>
                    <Text style={styles.subtitle}>Empezemos a conocer un poco de ti</Text>
                </View>
            <View>
                
            <View style={styles.input_container}>
                <Text>Email</Text>
                <TextInput
                    autoFocus={true}
                    style={styles.input}
                    onChangeText={handleEmail}
                    value={email}
                    placeholder="example@email.com"
                />
                <Text style={(email != null) ? [styles.error, {display:'flex'}]:styles.error}>{emailWrong ? "" : "Email incorrecto"}</Text>
            </View>
            
            <View style={styles.input_container}>
                <Text>Usuario</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleUsername}
                    value={username}
                    placeholder="juanperez"
                />
                <Text style={(username != null) ? [styles.error, {display:'flex'}]:styles.error}>{usernameWrong ? "" : "Nombre de usuario incorrecto"}</Text>
            </View>
            
            <View style={styles.input_container}>
                <Text>Contraseña</Text>
                <TextInput
                
                    secureTextEntry={true}
                    style={styles.input}
                    onChangeText={handlePassword}
                    value={password}
                    placeholder="***************"
                />
                <Text style={(password != null) ? [styles.error, {display:'flex'}]:styles.error}>{passwordWrong ? "" : "Contraseña incorrecta"}</Text>
                </View>
            </View>
            <Pressable style={styles.registerbutton}onPress={() => handleNextStep()} >
                    <Text>Siguiente</Text>
            </Pressable>
            <View>
                <Text style={styles.terminostext}>Al registrarse esta aceptando</Text>
                <Text style={styles.terminos} onPress={() => navigation.navigate('TermConScreen')}>Terminos & Condiciones</Text>
            </View>
        </ScrollView>
        </SafeAreaView>
        )
    }
    else if(menu === 'register_second_step'){
        return(
        <SafeAreaView style={styles.container}>
            <Spinner visible={isLoading} />
            <ScrollView 
            contentContainerStyle={{paddingTop:50, paddingHorizontal:20,}}
            >
                <Icon  name="arrow-back-outline" style={styles.back}  onPress={() => setMenu('register_first_step')} />
                <View>
                    <Text style={styles.title}>REGISTRATE</Text>
                    <Text style={styles.subtitle}>Empezemos a conocer un poco de ti</Text>
                </View>
            <View>
                
            <View style={styles.input_container}>
                <Text>Nombre</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handleName}
                    value={name}
                    placeholder="Juan Perez"
                />
                
                <Text style={(name != null ) ? [styles.error, {display:'flex'}]:styles.error}>{nameWrong ? "" : "Nombre incorrecto"}</Text>
            </View>
            
            <View style={styles.input_container}>
                <Text>Telefono</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={handlePhone}
                    value={phone}
                    placeholder="1234-567890"
                />
                <Text style={(phone != null) ? [styles.error, {display:'flex'}]:styles.error}>{phoneWrong ? "" : "Numero de telefono incorrecto"}</Text>
            </View>
            <View style={styles.input_container}>
                <Text>Ciudad</Text>
                <Picker
                    selectedValue={city}
                    style={styles.input}
                    onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
                >
                    <Picker.Item label="Buenos Aires" value="Buenos Aires" />
                </Picker>
                <Text style={(city == null) ? [styles.error, {display:'flex'}]:styles.error}>{cityWrong ? "" : "Introduce una Ciudad incorrecta"}</Text>
            </View>
            </View>
            <Pressable style={styles.registerbutton}  onPress={() => handleRegister()}>
                    <Text >Registrarse</Text>
            </Pressable>
            <View>
                <Text style={styles.terminostext}>Al registrarse esta aceptando</Text>
                <Text style={styles.terminos} onPress={() => navigation.navigate('Terminos')}>Terminos & Condiciones</Text>
            </View>
        </ScrollView>
        </SafeAreaView>
    )}
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',

    },      
    back:{
        fontSize:30,
        color: UIColors.light_black,
    },
    title: {
        width: wp('90%'),
        fontSize: wp('5%'),
        marginTop: hp('8%'),
        fontWeight: 'bold',
        color: '#3D3E3E',
    },      
    input: {
        height: 40,
        borderBottomWidth: 1,
        marginBottom: hp('1%'),
      },
    input_container: {
        width: wp('90%'),
        marginTop: hp('2%'),
        marginBottom: hp('2%'),
    },
    registerbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('30%'),
        borderRadius: 4,
        borderWidth: 2,
        borderColor: UIColors.light_black,
        marginTop: hp('3%'),
        color: UIColors.light_black,
      },
      subtitle:  {
        marginBottom: hp('5%'),
        width: wp('90%'),
        fontSize: wp('4%'),
        fontWeight: 'bold',
        color: UIColors.light_grey,
    },
    terminos:  {
        fontSize: wp('3%'),
        textAlign: 'center',
        fontWeight: 'bold',
    },
    terminostext:  {
        marginTop: hp('8%'),
        fontSize: wp('3%'),
        textAlign: 'center',
    },
    error: {
        display:'none',
        color: UIColors.light_red,
        fontSize: wp('3%'),
    }
})