import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Text, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default function TermConScreen({navigation}){
    return (
        <ScrollView 
        contentContainerStyle={{paddingTop:50, paddingHorizontal:20,}}
        >
            <Icon style={terminos.back} name="arrow-back-outline" size={30} color="black" onPress={() => navigation.goBack()} />
            <Text style={terminos.title}>Términos y Condiciones</Text>
            <Text style={terminos.subtitle}>
                Termino uno example 
            </Text>
            <Text style={terminos.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <Text style={terminos.subtitle}>
                Termino dos example 
            </Text>
            <Text style={terminos.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            
            <Text style={terminos.subtitle}>
                Termino tres example 
            </Text>
            <Text style={terminos.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            
            
        </ScrollView>
    )
}

const terminos = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },  
    title: {
        width: wp('90%'),
        fontSize: wp('5%'),
        marginTop: hp('8%'),
        fontWeight: 'bold',
        color: '#3D3E3E',
    },  
    subtitle:  {
        marginTop: hp('5%'),
        width: wp('90%'),
        fontSize: wp('4%'),
        fontWeight: 'bold',
        color: '#9A9A9A',
    },
    text:  {
        fontSize: wp('3%'),
    },

})