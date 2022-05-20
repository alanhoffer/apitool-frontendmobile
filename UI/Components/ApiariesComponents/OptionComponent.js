import {View, TextInput, Text, StyleSheet, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { UIColors } from '../../UIColors';
import {useState} from 'react';


export default function OptionComponent(props){

    const [selected, setSelected] = useState(true);

    const HandleClick = (item) => {
        
    }

    
    return(
        <View style={OptionStyles.container} >
            <MaterialCommunityIcons name={props.icon_name} style={OptionStyles.icon} color={selected ? UIColors.light_black: UIColors.white} onPress={() => HandleClick(props.id)}/>
            <Text style={OptionStyles.text}>{props.icon_text}</Text>
        </View>
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