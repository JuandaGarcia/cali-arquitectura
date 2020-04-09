import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../styles'
import { LinearGradient } from 'expo-linear-gradient'

const Lugar = () => {
	return (
		<View style={styles.lugar_container}>
			<View style={styles.header_lugar}>
				<Image
					style={styles.img_lugar}
					source={require('../img/lugares/1.jpg')}
				/>
				<View style={styles.title_header}>
					<Image
						style={styles.icon_lugar}
						source={require('../img/location.png')}
					/>
					<Text style={styles.nombre_lugar}>Teatro Jorge Isaacs</Text>
				</View>
				<LinearGradient
					colors={['transparent', 'white']}
					style={styles.gradient_semana}
				></LinearGradient>
			</View>
			<View style={styles.contenido_lugar}>
				<View style={styles.texto_lugar}>
					<Text style={{ fontWeight: 'bold' }}>Año: </Text>
					<Text>1931</Text>
				</View>
				<View style={styles.texto_lugar}>
					<Text style={{ fontWeight: 'bold' }}>Topología: </Text>
					<Text>Edificación para espectáculos</Text>
				</View>
				<View style={styles.texto_lugar}>
					<Text style={{ fontWeight: 'bold' }}>Promotores: </Text>
					<Text>
						Ingenieros Gaetano Lignarolo y Guido Micucci. Decorado por Mauricio
						Ramelli. Intervenido por Manuel Lago (DAPM, 2014).
					</Text>
				</View>
			</View>
		</View>
	)
}

export default Lugar
