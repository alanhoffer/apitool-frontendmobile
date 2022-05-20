import {View, TextInput, Text, StyleSheet, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import OptionComponent from '../Components/ApiariesComponents/OptionComponent';
import { UIColors } from '../UIColors';
import {useState} from 'react';




function AddApiaryScreen(){

    const Items = [{
            name:'Colmenas',
            icon:'archive-settings-outline',
        },
        {
            name:'Alimento',
            icon:'hexagon-outline',
        },
        {
            name:'Notas',
            icon:'text-box-outline',
        },        {
            name:'Electrico',
            icon:'shield-sun-outline',
        },

    ]
    const sanity = [
    {
        name:'Flumetrina',
        icon:'pill',
    },
    {
        name:'Amitraz',
        icon:'pill',
    },
    {
        name:'A.Oxalico',
        icon:'pill',
    },
    {
        name:'Oxitetra',
        icon:'pill',
    },
    {
        name:'Promotor L',
        icon:'needle',
    },
    {
        name:'BeePower',
        icon:'needle',
    },

]
    const others = [{
        name:'Cosecha',
        icon:'archive-settings-outline',
    }]

    const [selected, setSelected] = useState([]);

    const HandleClick = (item) => {
        if(selected.includes(item)){
            setSelected(selected.filter(i => i !== item))
        }
        else{
            setSelected([...selected, item])
        }
    }


    return(
        <>
        <View style={AddApiaryStyles.container}>
            <Image source={{uri: 'https://www.cidempanama.org/files/2019/04/import_placeholder-19.png'}} style={AddApiaryStyles.apiary_profile_img}/>
            <View style={AddApiaryStyles.apiary_info}>
                <View style={AddApiaryStyles.apiary_info_name}>
                    <Text style={AddApiaryStyles.apiary_name}>Nombre</Text>
                    <TextInput style={AddApiaryStyles.apiary_name_input} />
                </View>
                <View style={AddApiaryStyles.apiary_info_general}>
                    <Text style={AddApiaryStyles.apiary_general}>General</Text>
                    <View style={AddApiaryStyles.item_container} >

                          <OptionComponent icon_name={Items['0'].icon} icon_text={Items['0'].name}  />
                          <OptionComponent icon_name={Items['1'].icon} icon_text={Items['1'].name}  />
                          <OptionComponent icon_name={Items['2'].icon} icon_text={Items['2'].name}  />
                          <OptionComponent icon_name={Items['3'].icon} icon_text={Items['3'].name}  />

                    </View>
                </View>
                <View style={AddApiaryStyles.apiary_info_sanity}>
                    <Text style={AddApiaryStyles.apiary_general}>Sanidad & Nutricion</Text>
                    <View style={AddApiaryStyles.item_container} >

                          <OptionComponent icon_name={sanity['0'].icon} icon_text={sanity['0'].name}  />
                          <OptionComponent icon_name={sanity['1'].icon} icon_text={sanity['1'].name}  />
                          <OptionComponent icon_name={sanity['2'].icon} icon_text={sanity['2'].name}  />
                          <OptionComponent icon_name={sanity['3'].icon} icon_text={sanity['3'].name}  />
                          <OptionComponent icon_name={sanity['4'].icon} icon_text={sanity['4'].name}  />
                          <OptionComponent icon_name={sanity['5'].icon} icon_text={sanity['5'].name}  />

                    </View>
                </View>
                <View style={AddApiaryStyles.apiary_info_sanity}>
                    <Text style={AddApiaryStyles.apiary_general}>Otros</Text>
                    <View style={AddApiaryStyles.item_container} >

                          <OptionComponent icon_name={others['0'].icon} icon_text={others['0'].name}  />

                    </View>
                </View>
            </View>
        </View>
        </>
    )
}

export default AddApiaryScreen;

const AddApiaryStyles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'flex-start',
    },
    apiary_profile_img:{
        width:wp('100%'),
        height:hp('30%'),
    },
    apiary_info:{
        alignItems:'flex-start',
        justifyContent:'center',
    },
    apiary_info_name:{
    },
    apiary_name:{
        marginTop:hp('2%'),
        fontSize:hp('2%'),
        color:UIColors.light_black,
        fontWeight:'bold',
    },
    apiary_name_input:{
        width:wp('80%'),
        marginTop:hp('0.5%'),
        fontSize:hp('2%'),
        borderRadius:hp('0.1%'),
        borderBottomColor:UIColors.light_grey,
        borderBottomWidth:hp('0.3%'),
    },
    apiary_general:{
        marginTop:hp('2%'),
        fontSize:hp('2%'),
        color:UIColors.light_black,
        fontWeight:'500',
    },
    item_container:{
        width:wp('80%'),
        flexWrap:'wrap',
        flexDirection:'row',
    },


})