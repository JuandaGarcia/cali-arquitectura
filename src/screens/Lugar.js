import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableHighlight, ScrollView } from 'react-native'
import styles from '../styles'
import { LinearGradient } from 'expo-linear-gradient'
import lugares from '../data/lugares.json'
import { useHistory } from 'react-router-native'

const Lugar = (props) => {
	const lugarID = props.match.params.id
	const [Lugar, setLugar] = useState('')
	const history = useHistory()

	useEffect(() => {
		console.log('Lugar:' + lugarID)
		for (let i = 0; i < lugares.length; i++) {
			if (lugares[i].id == lugarID) {
				setLugar(lugares[i])
				console.log(lugares[i].nombre)
			}
		}
	}, [])

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
					<Text style={styles.nombre_lugar}>{Lugar.nombre}</Text>
				</View>
				<TouchableHighlight
					underlayColor="transparent"
					onPress={() => {
						history.push('/')
					}}
					style={styles.backContainer}
				>
					<View style={styles.backContainerHijo}>
						<Image
							style={styles.icon_lugar}
							source={require('../img/back.png')}
						/>
						<Text style={styles.atras}>Atras</Text>
					</View>
				</TouchableHighlight>
				<LinearGradient
					colors={['transparent', 'white']}
					style={styles.gradient_semana}
				></LinearGradient>
			</View>
			<ScrollView style={styles.contenido_lugar}>
				<View style={styles.texto_lugar}>
					<Text>
						<Text style={{ fontWeight: 'bold' }}>Año: </Text>
						{Lugar.año}
					</Text>
				</View>
				<View style={styles.texto_lugar}>
					<Text>
						<Text style={{ fontWeight: 'bold' }}>Topología: </Text>
						{Lugar.tipologia}
					</Text>
				</View>
				<View style={styles.texto_lugar}>
					<Text>
						<Text style={{ fontWeight: 'bold' }}>Promotores: </Text>
						{Lugar.arquitectos_inventores}
					</Text>
				</View>
				<View style={styles.texto_lugar}>
					<Text>
						<Text style={{ fontWeight: 'bold' }}>Historia: </Text>
						{Lugar.historia}
					</Text>
				</View>
				<View style={styles.texto_lugar}>
					<Text>
						<Text style={{ fontWeight: 'bold' }}>Protección: </Text>
						{Lugar.proteccion}
					</Text>
				</View>
				<View style={styles.texto_lugar}>
					<Text>
						<Text style={{ fontWeight: 'bold' }}>Anotaciones: </Text>
						{Lugar.anotaciones}
					</Text>
				</View>
				<View style={styles.margin}></View>
			</ScrollView>
		</View>
	)
}

export default Lugar
