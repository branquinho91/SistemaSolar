import { StyleSheet, Text, View, StatusBar, SafeAreaView, Image, ScrollView } from "react-native";
import planetas from "./planetas";
import Planeta from "./Planeta";

export default App = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="auto" />

      {/* Header */}
      <View style={styles.header}>
        <Image source={require("./assets/foguetinho.png")} style={styles.imgFoguetinho} />
        <Text style={styles.h1}>Sistema Solar</Text>
        <Image source={require("./assets/foguetinho.png")} style={styles.imgFoguetinho} />
      </View>

      {/* Planetas */}
      <ScrollView>
        {planetas.map((planeta) => (
          <Planeta key={planeta.id} planeta={planeta} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#4B0082",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
    marginTop: 30,
  },
  h1: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  imgFoguetinho: {
    width: 50,
    height: 50,
  },
});
