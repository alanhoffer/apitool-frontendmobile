
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { UIColors } from '../UIColors';

export default function NoticeScreen({route, navigation}){
    const { noticeid, title, text, img } = route.params;

    return(
        <ScrollView style={styles.ScrollView}>
            <View style={styles.notice}>
                <Image style={styles.noticeImage} source={{uri: img}} />
                <Text style={styles.noticeTitle}>{title}</Text>
                <Text style={styles.noticeDescription}>{text}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ScrollView:{
        height:hp('90%'),
        width:wp('100%'),
        backgroundColor:UIColors.white,
    },
    notice:{        
        flex:1,
        height: 'auto',
        width:wp('100%'),
        flexDirection:'column',
        alignItems:'center',
        backgroundColor:UIColors.white,
    },
    noticeImage:{
        width: wp('100%'),
        height: hp('30%'),
    },
    noticeTitle:{
        width: wp('90%'),
        fontSize:hp('2.2%'),
        marginTop:hp('2%'),
        height: 'auto',
        color:UIColors.black,
        fontWeight:'bold',
    },
    noticeDescription:{
        width: wp('90%'),
        height: 'auto',
        fontSize:hp('1.8%'),
        color:UIColors.black,
        marginBottom:hp('5%'),

    }
}
)