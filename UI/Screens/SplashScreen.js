import { ActivityIndicator, View, StyleSheet} from "react-native";

export default function SplashScreen() {

    return(
      <View style={[loadingstyles.container, loadingstyles.horizontal]}>
        <ActivityIndicator size="large" color="black" />
      </View>
    )
}
const loadingstyles = StyleSheet.create({
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