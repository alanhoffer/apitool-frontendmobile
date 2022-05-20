import {View, StyleSheet, ActivityIndicator} from 'react-native';

export default function LoadingComponent() {
    return (
        <View style={[LOADING_STYLES.container, LOADING_STYLES.horizontal]}>
            <ActivityIndicator size="large" color="black" />
        </View>
    )
}

const LOADING_STYLES = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
});