import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins: require("./app/res/fonts/Poppins-Regular.ttf"),
  });
  return (
    <View style={styles.container}>
    Final Project
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
