import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Text } from 'react-native';
import { UIColors } from '../UIColors';


export const NoticeHeader = {
        title: 'Noticias',
        headerTitleAlign: 'center',
        headerTintColor: UIColors.light_black,
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


