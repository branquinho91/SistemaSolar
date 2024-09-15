import { StyleSheet, Text, View, Image } from "react-native";

export default Planeta = ({ planeta }) => {
  const formatNum = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " km²";

  return (
    <View style={styles.planetaView}>
      <Text style={styles.h2}>{planeta.nome}</Text>

      <Image style={styles.imgPlaneta} source={planeta.img} />

      <View style={styles.infoView}>
        <Text style={styles.textGray}>Velocidade orbital média</Text>
        <Text style={styles.textWhite}>{planeta.velocidadeOrbitalMediaKmS} km/s</Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.textGray}>Satélites</Text>
        <Text style={styles.textWhite}>{planeta.quantidadeSatelites}</Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.textGray}>Área de superfície</Text>
        <Text style={styles.textWhite}>{formatNum(planeta.areaSuperficieKm2)}</Text>
      </View>

      <View style={styles.infoView}>
        <Text style={styles.textGray}>Período de rotação</Text>
        <Text style={styles.textWhite}>{planeta.periodoRotacaoDias} d</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  planetaView: {
    alignItems: "center",
    margin: 15,
    padding: 15,
    backgroundColor: "#000",
    borderRadius: 20,
  },
  h2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 10,
  },
  imgPlaneta: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  infoView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
  textWhite: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  textGray: {
    color: "#ccc",
    fontSize: 14,
  },
});
