import {View, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { UIColors } from '../../UI/UIColors';


const DashboardStyles = StyleSheet.create({
    container: {
        flexDirection:'row',
         alignItems: 'center'
    },
    notifications:{
        marginTop:hp('0.1%'),
        fontSize:hp('3.5%'),
        color:UIColors.light_black,
    },
    chats:{
        marginTop:hp('0.1%'),
        marginLeft:wp('3%'),
        fontSize:hp('3.3%'),
        color: UIColors.light_black,
    },
    
})

export const DashboardHeader = {
        headerTitle: '',
        headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'normal',
            color: UIColors.light_black,
        },
        headerStyle: {
            backgroundColor: UIColors.white,
            height: hp('8%'),
        },
        headerRight: () => (
                    <View style={DashboardStyles.container}>
                        <MaterialCommunityIcons style={DashboardStyles.notifications} name="bell-outline" color="black"  />
                        <MaterialCommunityIcons style={DashboardStyles.chats} name="comment-text-outline"  />
                    </View>
                )
                
    
    
}


