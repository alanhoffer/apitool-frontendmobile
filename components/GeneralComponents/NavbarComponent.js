import {View, StyleSheet, Pressable,Image, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React, { useState,  } from 'react';
import ProfileImageExample from '../../assets/home/HomeLogo.png';
import { useNavigation } from '@react-navigation/native';


const Navbar = (props) => {

    const navigation = useNavigation();
        

    return (
    <View style={styles.navbar}>
        <Icon style={styles.navitemhome} name="home" onPress={() => navigation.navigate('DashboardScreen')} />
        <Icon style={styles.navitemadd} name="add-circle" onPress={() => setVisible(true)}  />

        <Pressable onPress={() => navigation.navigate('ProfileScreen')} >
            <Image style={styles.navprofile} source={ProfileImageExample}/>
        </Pressable>
        <View style={styles.container}>

        </View>
    </View>
    
    );
  }
  
export default Navbar;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
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
    navbar:{
        position:'absolute',
        top:hp('92%'),
        height:hp('8%'),
        width:wp('100%'),
        backgroundColor:'white',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    }  
})