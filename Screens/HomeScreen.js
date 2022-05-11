import {View, Text, StyleSheet, Pressable, Image, Alert} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import HomeLogo from '../assets/home/HomeLogo.png';

export default function HomeScreen({navigation}){
    return (
        <View style={styles.container}>
        <View>
            <Image source={HomeLogo} style={styles.logo}/>
            <Text style={styles.title}>Bienvenido a Apitool!</Text>
            <Text style={styles.text}>Crea una cuenta o inicia sesión  y conéctate con apicultores de todo el mundo.</Text>
        </View>
        <View>
            <Pressable style={styles.loginbutton} onPress={() => navigation.navigate('LoginScreen')}  >
                <Text >Inicia sesión</Text>
            </Pressable>            
            <Pressable style={styles.registerbutton} onPress={() => navigation.navigate('RegisterScreen')}   >
                <Text style={{color: "white"}}>Registrate</Text>
            </Pressable>
        </View>

        <Text style={styles.support} onPress={() => Alert.alert('Estamos trabajando en esta seccion, apitoolhelp@gmail.com')}>Nesesitas ayuda? Contacto</Text>

    </View>
    );

}

const styles = StyleSheet.create({
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
        textAlign:'center',
        width: wp('60%'),
        fontWeight: 'bold',
    },
    text: {
        fontSize: wp('4%'),
        textAlign:'center',
        width: wp('60%'),
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