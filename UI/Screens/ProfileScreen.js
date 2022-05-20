// REACT IMPORTS
import {View, Text, ActivityIndicator, StyleSheet, Image} from 'react-native';
import { useContext, useEffect, useState  } from 'react';

// UI DESIGN IMPORTS
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {UIColors} from '../UIColors';

// AUTHENTICATION & API
import { AuthContext } from '../../module/Auth/AuthContext';
import { getUser } from '../../module/APIManager/APIUser';


//COMPONENTS
import Navbar from '../Components/GeneralComponents/NavbarComponent';
import LoadingComponent from '../Components/GeneralComponents/LoadingComponent';

export default function ProfileScreen({navigation}){

    const {sessionInfo, logout} = useContext(AuthContext);

    const [user, setUser] = useState(null); 

    useEffect(() => {



        getUser(sessionInfo).then(response => {
            if(response){
                setUser(response);
            }
        });

        
    },[]);
    
    if (!(user)) {

      return (<LoadingComponent/>)

    }
    else{

    return (
        <>
    <View style={styles.container}>

        
    <View style={styles.infocontainer}>

        <View style={styles.profileimagecontainer}>
            <Image style={styles.profileimg}  source={{uri: `${user.profile_img}`}}></Image>
            <Text style={styles.usernametext}>${user.username}</Text>
            <Text style={styles.editdatatext}>EDITAR</Text>
        </View>

        <View style={styles.textcontainer}>
            <Text style={styles.inforeferencetext}>NOMBRE</Text>
            <Text style={styles.infotext}>{user.name}</Text>
            <Text style={styles.line}></Text>

            <Text style={styles.inforeferencetext}>EMAIL</Text>
            <Text style={styles.infotext}>{user.email}</Text>
            <Text style={styles.line}></Text>

            <Text style={styles.inforeferencetext}>TELEFONO</Text>
            <Text style={styles.infotext}>{user.phone}</Text>
            <Text style={styles.line}></Text>

            <Text style={styles.inforeferencetext}>DIRECCION</Text>
            <Text style={styles.infotext}>{user.city}</Text>
            <Text style={styles.line}></Text>

        </View>
            


        <Text style={styles.closesession} onPress={() => logout()}>CERRAR SESSION</Text>
        </View>

        <Navbar/>


    </View>
        </>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#fff',
    },
    profileimagecontainer:{
        alignItems:'center',
    },
    infocontainer:{
        flex:1,
        width:wp('100%'),
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: UIColors.white,
    },
    textcontainer:{
        width:wp('80%'),
        flexDirection:'column',
        backgroundColor: UIColors.white,
        marginTop:hp('2%'),
        justifyContent:'space-around',
        
    },
    profileimg:{
      width:wp('25%'),
      height:wp('25%'),
      borderRadius:wp('50%'),
    },
    editdatatext:{
      fontSize:14,
      fontWeight:'bold',
      color:'#2680EB',
      textAlign:'center',
    },
    usernametext:{
      fontSize:20,
      fontWeight:'bold',
      marginTop:hp('1%'),
      textAlign:'center',
    },
    closesession:{
      fontSize:14,
      fontWeight:'bold',
      marginTop:hp('2%'),
      color:'#2680EB',
      textAlign:'center',
    },

    inforeferencetext:{
      fontSize:14,
      marginBottom:hp('1%'),
    },
    infotext:{
      fontSize:16,
      fontWeight:'bold',
      marginBottom:hp('1%'),
    },
    nightmode:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
    },
    
  
  
      
  });

