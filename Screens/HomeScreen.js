import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import HomeLogo from '../assets/home/HomeLogo.png';

export default function HomeScreen({navigation}){
    return (
        <View style={welcome.container}>
        <Image source={HomeLogo} style={welcome.logo}/>
        <View>
            <Text style={welcome.title}>Bienvenido a Apitool!</Text>
            <Text style={welcome.text}>Crea una cuenta o inicia sesión  y conéctate con apicultores de todo el mundo.</Text>
        </View>
        <View>
            <Pressable style={welcome.loginbutton} onPress={() => navigation.navigate('LoginScreen')}  >
                <Text >Inicia sesión</Text>
            </Pressable>            
            <Pressable style={welcome.registerbutton} onPress={() => navigation.navigate('RegisterScreen')}   >
                <Text style={{color: "white"}}>Registrate</Text>
            </Pressable>
        </View>

        <Text style={welcome.support}>Nesesitas ayuda? Contacto</Text>

    </View>
    );

}

const welcome = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-evenly',
    },

    logo: {
        width: wp('35%'),
        height: hp('35%'),
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    title: {
        fontSize: wp('5%'),
        marginTop: hp('2%'),
        alignSelf: 'center',
    },
    text: {
        fontSize: wp('4%'),
        width: wp('80%'),
        textAlign: 'center',
        marginTop: hp('2%'),

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('10%'),
        borderRadius: 4,
        borderColor: "black",
        backgroundColor: 'white',
        elevation: 1,
        marginTop: hp('2%'),
      },
    loginbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('10%'),
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#424242",
        marginTop: hp('2%'),
      },
    registerbutton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: hp('2%'),
        paddingHorizontal: wp('10%'),
        borderRadius: 4,
        borderColor: "#424242",
        elevation: 1,
        backgroundColor: '#424242',
        marginTop: hp('2%'),
      },
      support: {
        fontSize: wp('4%'),
        textAlign: 'center',
        marginTop: hp('2%'),

    },
})