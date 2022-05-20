// REACT IMPORTS
import { ActivityIndicator, View, StyleSheet, TouchableWithoutFeedback , ScrollView} from 'react-native';
import { useContext, useEffect, useState  } from 'react';

// UI DESIGN IMPORTS
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {UIColors} from '../UIColors';

// AUTHENTICATION & API
import { AuthContext } from '../../module/Auth/AuthContext';
import { getNotices } from '../../module/APIManager/APINotices';
import { getUser } from '../../module/APIManager/APIUser';


//COMPONENTS
import NoticeComponent from '../Components/DashboardComponents/NoticeComponent';
import Navbar from '../Components/GeneralComponents/NavbarComponent';
import LoadingComponent from '../Components/GeneralComponents/LoadingComponent';

export default function Dashboard({navigation}){
    const {sessionInfo} = useContext(AuthContext);

    
    const [user, setUser] = useState(null); 
    const [notices, setNotices] = useState(null);

    useEffect(() => {

        getNotices(sessionInfo).then(notic => {
            if(notic){
                setNotices(notic)
            }
        });

        getUser(sessionInfo).then(response => {
            if(response){
                setUser(response);
                navigation.setOptions({
                    headerTitle: `Hola ${response.name}!`});
                }
        });

        
    },[]);
    

    const handleExpandNotice = (noticeid, title, text, img, date) => {
        navigation.push('NoticeScreen', 
                    {
                        noticeid: noticeid,
                        title: title,
                        text: text,
                        img: img,
                        date: date
                    })
    }

    
    if (!(user && notices)) {

        return (  
            <LoadingComponent />
        )

    }
    else{

    return(
        <View style={styles.container}>

            <ScrollView style={styles.ScrollView}>
            {notices.map (notic => {
                return(
                    
                <TouchableWithoutFeedback  key={notic.id} onPress={() => handleExpandNotice(notic.id, notic.title, notic.text, notic.img, notic.date)}>
                    <View>
                        <NoticeComponent title={notic.title} content={notic.text} img={notic.img} date={notic.date} navigation={navigation}></NoticeComponent>
                    </View>
                </TouchableWithoutFeedback  >

                )
            })}
            </ScrollView>
            
            <Navbar  />
        </View>
    )
    }
    
    }



const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    ScrollView:{
        height:hp('100%'),
        backgroundColor:UIColors.dark_white,
        width:wp('100%'),
    },

})

