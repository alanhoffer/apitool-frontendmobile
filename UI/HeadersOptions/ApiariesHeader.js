import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { UIColors } from '../../UI/UIColors';


export const ApiariesHeader = {
        title: '',
        headerTitleAlign: 'center',
        headerTintColor: UIColors.light_black,
        headerShadowVisible: false,
        headerTitleStyle: {
            fontSize:20,
            fontWeight: 'normal',
            color: UIColors.light_black
        },
        headerStyle: {
            backgroundColor: UIColors.white,
            height: hp('7%'),
        },


    
}


