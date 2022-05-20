
import {View, Text, StyleSheet, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { UIColors } from '../../UIColors';

export default function NoticeComponent(props){
    

    return(
        <>
            <View style={styles.notice}>
                <Image style={styles.noticeImage} source={{uri: props.img}} />
                <Text style={styles.noticeTitle}>{props.title}</Text>
                <Text style={styles.noticeDescription}>
                    {props.content}
                </Text>
                <Text style={styles.noticeDate}>
                    {props.date}
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    notice:{        
        flex:1,
        width:wp('100%'),
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: UIColors.white,
        marginBottom:hp('2%'),
    },
    noticeImage:{
        width: wp('100%'),
        height: hp('50%'),
    },
    noticeTitle:{
        width: wp('90%'),
        fontSize:hp('2.2%'),
        marginTop:hp('2%'),
        color: UIColors.light_black,
        fontWeight:'bold',
    },
    noticeDescription:{
        width: wp('90%'),
        maxHeight:hp('15%'),
        fontSize:hp('1.8%'),
        marginTop:hp('1%'),
        color: UIColors.light_black,

    },
    noticeDate:{
        width: wp('90%'),
        fontSize:hp('1.8%'),
        color: UIColors.grey,
        marginTop:hp('1%'),
        marginBottom:hp('2%'),
    }
}
)