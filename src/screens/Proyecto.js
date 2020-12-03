import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import styles from "../styles";

const Proyecto = () => {
  return (
    <View style={styles.navbarArquictetura}>
      <View style={styles.navbar_arriba}>
        <View style={styles.backContainerNegro}>
          <Image
            style={styles.icon_negro}
            resizeMode="contain"
            source={require("../img/arrow.png")}
          />
          <Text style={styles.atrasNegro}>Atras</Text>
          <View style={styles.raya}></View>
        </View>
      </View>
      <ScrollView>
        <View>
          <Text style={styles.titulos}>Proyecto USC</Text>
        </View>
        <View>
          <Image
            style={styles.imagenProyecto}
            resizeMode="contain"
            source={require("../img/imgProyecto.png")}
          />
        </View>
        <View style={styles.contenido_lugar_arquitectura}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Proyecto;
