import {View, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { UIColors } from '../../UI/UIColors';


export const AddApiariesHeader = {
        title: '',
        headerTitleAlign: 'center',
        
        headerTransparent: true,
        headerShadowVisible: false,
        headerTitleStyle: {
            fontSize:20,
            fontWeight: 'normal',
            color: UIColors.light_black
        },
        headerStyle: {
            height: hp('7%'),
        },


    
}


