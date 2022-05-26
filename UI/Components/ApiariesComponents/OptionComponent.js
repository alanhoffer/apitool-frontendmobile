import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { UIColors } from '../../UIColors';


export default function OptionComponent(props){

    
    return(
        <TouchableOpacity activeOpacity={0.4} onPress={() => props.onPress()}>
        <View style={OptionStyles.container}>
                <MaterialCommunityIcons name={props.icon_name} style={OptionStyles.icon} color={props.state ? UIColors.blue: UIColors.grey}/>
                <Text style={OptionStyles.text}>{props.icon_text}</Text>
        </View>

        </TouchableOpacity>
    )
}

const OptionStyles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        borderBottomColor:UIColors.light_grey,
        margin:hp('1%'),
        width:wp('15%'),
    },
    icon:{
        fontSize:hp('4%'),
        marginTop:hp('2%'),
    },
    text:{
        fontSize:hp('1.5%'),
        color:UIColors.light_black,
    }
}
)