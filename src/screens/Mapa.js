import React from 'react'
import { View, Text, Image } from 'react-native'
import MapView from 'react-native-maps'
import styles from '../styles'
import lugares from '../data/lugares.json'

const Mapa = () => {
	return (
		<View>
			<MapView
				initialRegion={{
					latitude: 3.4372201,
					longitude: -76.5224991,
					latitudeDelta: 0.09,
					longitudeDelta: 0.09,
				}}
				style={styles.mapStyle}
			>
				{lugares.map((lugar) => {
					return (
						<MapView.Marker
							onPress={() => {
								console.log('hola')
							}}
							key={lugar.id}
							coordinate={{
								latitude: lugar.gps[0],
								longitude: lugar.gps[1],
							}}
							title={lugar.nombre}
							description={lugar.tipologia}
						>
							<Image
								source={require('../img/lugares/1.jpg')}
								style={styles.makerIMG}
							/>
						</MapView.Marker>
					)
				})}
			</MapView>
		</View>
	)
}

export default Mapa
