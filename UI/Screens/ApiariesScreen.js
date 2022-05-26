// REACT IMPORTS
import {View, Text, ActivityIndicator, StyleSheet, ScrollView} from 'react-native';
import { useContext, useEffect, useState  } from 'react';
import { SearchBar } from 'react-native-elements';

import {componentDidMount} from 'react-native';

// UI DESIGN IMPORTS
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {UIColors} from '../UIColors';

// AUTHENTICATION & API
import { AuthContext } from '../../module/Auth/AuthContext';
import { getApiaries } from '../../module/APIManager/APIApiaries';



//COMPONENTS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ApiaryComponent from '../Components/ApiariesComponents/ApiaryComponent';
import Navbar from '../Components/GeneralComponents/NavbarComponent';
import LoadingComponent from '../Components/GeneralComponents/LoadingComponent';


export default function ApiarysScreen({navigation}){
    const { sessionInfo } = useContext(AuthContext);

    const [apiaries, setApiaries] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        getApiaries(sessionInfo)
        .then(response => {response.msg ? null : setApiaries(response)})
        .catch(error => {
            console.log(error);
        }
        )
    }, []);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View style={ApiariesStyles.container}>    
                    <SearchBar
                    platform="default"
                    containerStyle={ApiariesStyles.input_outcontainer}
                    inputContainerStyle={ApiariesStyles.input_incontainer}
                    placeholder="Buscar un apiario"
                    placeholderTextColor={UIColors.grey}
                    onChangeText={text => setSearch(text)}
                    value={search}
                    onClearText={() => setSearch('')}
                    cancelButtonTitle="Cancel"
    
                    />
                </View>
            ),
            headerRight: () => (
                <View style={ApiariesStyles.right} >
                    <MaterialCommunityIcons name="plus" size={hp('4%')} color={UIColors.light_black} onPress={() => navigation.navigate('AddApiaryScreen')} />
                </View>
            )
        
        });
        }, [search]);



    if(!apiaries){
        return(
            <LoadingComponent />
        )
    }else{
        const filteredApiaries = apiaries.filter(apiary => {
            return apiary.name.toLowerCase().includes(search.toLowerCase());
        }
        );
    return(
            <>
            <ScrollView style={ApiariesStyles.scroll_apiaries}>
                {filteredApiaries.map((apiary, index) => { 
                    return <ApiaryComponent key={index} name={apiary.name} />
                    })}
            </ScrollView>
            </>
    )
}
}
const ApiariesStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scroll_apiaries: {
        marginBottom: hp('2%'),
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input_outcontainer: {
        backgroundColor: UIColors.white,
        borderBottomColor: "transparent",
        borderTopColor: "transparent"
    },
    input_incontainer: {
        backgroundColor: UIColors.dark_white,
        height: hp('5%'),
        width: wp('65%'),
        borderRadius: hp('1%')
    }


})  

