import { useContext, useEffect, useState  } from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../module/auth/AuthContext';
import Navbar from '../components/GeneralComponents/NavbarComponent';
import {getNotices} from '../module/APIManager/APINotices';
import { getUser } from '../module/APIManager/APIUser';


export default function Dashboard({navigation}){
    const {sessionInfo, logout} = useContext(AuthContext);
    if (!sessionInfo.access_token) {
        navigation.navigate('LoginScreen');
    }
    else{


    const [user, setUser] = useState(null); 
    const [notices, setNotices] = useState(null);
    const [isLoading, setLoading] = useState(true);



        useEffect(() => {

            getNotices(sessionInfo).then(notic => {
                setNotices(notic)
            });
            getUser(sessionInfo).then(response => {
                setUser(response);
            });
            
            },[]);
    

    
    if (!(user && notices)) {
        return (
            <Text>Loading...</Text>
        )
    }
    else{
        console.log("ESTADO DE USER", user, "ESTADO DE NOTICES", notices);
    return(
        <View style={styles.container}>
            <View style={styles.header}> 
                <Text style={styles.welcome}> Hola, {user.name} ! </Text>
                <View style={{flexDirection:'row'}}>
                <Icon style={styles.notifications} name="notifications-outline" color="black" />
                <Icon style={styles.alert} name="alert-circle-outline" onPress={() => logout()}  />
            </View>
        </View>


            <ScrollView style={styles.ScrollView}>
            {notices.map (notic => {
                return(
                    <View style={styles_notice.notice} key={notic.id}>
                        <Image style={styles_notice.noticeImage} source={{uri: notic.img}} />
                        <Text style={styles_notice.noticeTitle}>{notic.title}</Text>
                        <Text style={styles_notice.noticeDescription}>
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                             Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500,
                              cuando un impresor (N. del T. persona que se dedica a la imprenta) 
                              desconocido usó una galería de textos y los mezcló de tal manera qu
                              e logró hacer un libro de textos especimen. No sóLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.
                             </Text>
                    </View>
                )
            })}
            </ScrollView>
            
            <Navbar  />
        </View>
    )
    }
    
    }
}



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    header:{
        width:wp('90%'),
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    welcome:{
        fontSize:hp('3.5%'),
        color:'black',
        fontWeight:'bold',
    },
    navitemhome:{
        fontSize:hp('3.5%'),
        color:'black',
    },
    navitemadd:{
        fontSize:hp('5%'),
        color:'black',
    },
    navprofile:{
        height:hp('3.5%'),
        width:hp('3.5%'),
        borderRadius:hp('50%'),
    },

    notifications:{
        marginTop:hp('0.1%'),
        fontSize:hp('4%'),
        color:'black',
    },
    alert:{
        marginTop:hp('0.1%'),
        marginLeft:wp('3%'),
        fontSize:hp('4%'),
        color:'black',
    },
    input: {
        height: 40,
        width: wp('90%'),
        height: hp('6%'),
        marginTop: hp('1%'),
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#ACACAC',
        padding: 10,
      },
    ScrollView:{
        marginTop:hp('2%'),
        marginBottom:hp('5%'),
        height:hp('65%'),
        width:wp('100%'),
    },
    navbar:{
        width:wp('90%'),
        flex:1,
        flexDirection:'row',
        height: hp('10%'),
        justifyContent:'space-evenly',
        alignItems:'center'
    }  
})

const styles_notice = StyleSheet.create({
    notice:{        
        flex:1,
        width:wp('100%'),
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:hp('5%'),
        backgroundColor: 'white',
    },
    noticeImage:{
        width: wp('100%'),
        height: hp('25%'),
    },
    noticeTitle:{
        width: wp('90%'),
        fontSize:hp('2.2%'),
        marginTop:hp('2%'),
        color:'black',
        fontWeight:'bold',
    },
    noticeDescription:{
        width: wp('90%'),
        fontSize:hp('1.8%'),
        marginTop:hp('2%'),
        color:'black',
        marginBottom:hp('5%'),

    }
}
)