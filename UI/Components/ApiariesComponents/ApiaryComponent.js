import {View, Image, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';



// UI DESIGN IMPORTS
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function ApiaryComponent(props){
    return(
        <>
            <View style={styles.container}>

                <View style={styles.apiary_info}>
                    <View style={styles.left_container}>
                        <Image style={styles.apiary_img} source={{uri:'https://wallpaperaccess.com/full/7379881.jpg'}}  />
                        <View style={styles.mid_container}>
                            <Text style={styles.apiary_name}>{props.name}</Text>
                            <View style={styles.apiary_description}>
                                <View style={styles.description_item} >
                                    <Text style={styles.item_state}>3</Text>
                                    <Text style={styles.item_text}>Varroa</Text>
                                </View>
                                <View style={styles.description_item} >
                                    <Text style={styles.item_state}>3</Text>
                                    <Text style={styles.item_text}>Varroa</Text>
                                </View>
                                <View style={styles.description_item} >
                                    <Text style={styles.item_state}>3</Text>
                                    <Text style={styles.item_text}>Varroa</Text>
                                </View>
                                <View style={styles.description_item} >
                                    <Text style={styles.item_state}>3</Text>
                                    <Text style={styles.item_text}>Varroa</Text>
                                </View>
                                <View style={styles.description_item} >
                                    <Text style={styles.item_state}>3</Text>
                                    <Text style={styles.item_text}>Varroa</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                    <View style={styles.info_item}>
                        <Text style={styles.apiary_hives}>29</Text>
                        <Text style={styles.apiary_hives_text}>Junio</Text>
                    </View>
                </View>

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        margin: wp('2%'),
        borderRadius: hp('1%'),
        padding: wp('5%'),
    },

    apiary_info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    left_container:{
        flexDirection: 'row',
    },
    mid_container:{
        flexDirection: 'column',
    },
    apiary_img: {
        width: hp('9%'),
        height: hp('9%'),
        borderRadius: hp('1%'),
        marginRight: hp('2%'),
    },
    info_item: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    apiary_name: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        marginBottom: hp('1%'),
        color: '#000',
        
    },
    apiary_hives: {
        fontSize: hp('2%'),
        fontWeight: 'bold',
        color: '#000',
    },
    apiary_hives_text: {
        fontSize: hp('2%'),
        color: '#000',
    },
    apiary_description: {
        width: wp('50%'),
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    description_item: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: wp('1.4%'),
    },
    item_state: {
        fontSize: hp('1.5%'),
        fontWeight: 'bold',
        color: '#000',
    },
    item_text: {
        fontSize: hp('1.5%'),
        color: '#000',
    }
})