import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import styles from "../styles";

const SobreArquitectura = () => {
  return (
    <View>
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
          <Text style={styles.titulos}>Sobre la Arquitectura</Text>
          <Text
            style={{ fontWeight: "bold", fontSize: 33, textAlign: "center" }}
          >
            republicana-neoclásicas
          </Text>
          <View>
            <Image
              style={styles.image_arquitectura}
              resizeMode="contain"
              source={require("../img/1.png")}
            />
          </View>

          <ScrollView style={styles.contenido_lugar_arquitectura}>
            <View style={styles.onda}>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident
              </Text>
            </View>
          </ScrollView>

          <View>
            <Image
              style={styles.image_arquitectura}
              resizeMode="contain"
              source={require("../img/2.png")}
            />
          </View>
          <View style={styles.marginArqui}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SobreArquitectura;
