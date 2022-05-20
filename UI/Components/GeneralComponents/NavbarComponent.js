import {View, StyleSheet, Pressable,Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { UIColors } from '../../UIColors';


const Navbar = (props) => {

    const navigation = useNavigation();
        

    return (
    <View style={styles.navbar}>
        <MaterialCommunityIcons style={styles.navitemhome} name="home-variant-outline" onPress={() => navigation.navigate('DashboardScreen')} />
        <MaterialCommunityIcons style={styles.navitemadd} name="beehive-outline" onPress={() => navigation.navigate('ApiariesScreen')} />

        <Pressable onPress={() => navigation.navigate('ProfileScreen')} >
            <MaterialCommunityIcons style={styles.navprofile} name="account-circle-outline" />
        </Pressable>

    </View>
    
    );
  }
  
export default Navbar;


const styles = StyleSheet.create({

    navitemhome:{
        fontSize:hp('3.5%'),
        color:UIColors.light_black,
    },
    navitemadd:{
        fontSize:hp('3.5%'),
        color:UIColors.light_black,
    },
    navprofile:{
        fontSize:hp('3.5%'),
        color:UIColors.light_black,
    },
    navbar:{
        height:hp('7%'),
        width:wp('100%'),
        backgroundColor:UIColors.white,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'
    }  
})