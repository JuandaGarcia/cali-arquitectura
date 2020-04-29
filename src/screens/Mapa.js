import React from 'react'
import { View, Text, Image } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import styles from '../styles'
import lugares from '../data/lugares.json'
import { useHistory } from 'react-router-native'
import { MapStyle, MapStyleElectric, Blue } from '../components/MapStyle'

const Mapa = () => {
	const history = useHistory()

	return (
		<View>
			<MapView
				initialRegion={{
					latitude: 3.4372201,
					longitude: -76.5224991,
					latitudeDelta: 0.09,
					longitudeDelta: 0.09,
				}}
				customMapStyle={Blue}
				style={styles.mapStyle}
			>
				{lugares.map((lugar) => {
					return (
						<Marker
							key={lugar.id}
							image={require('../img/marker.png')}
							coordinate={{
								latitude: lugar.gps[0],
								longitude: lugar.gps[1],
							}}
						>
							<Callout
								tooltip
								onPress={() => {
									history.push(`/info-lugar/${lugar.id}`)
								}}
							>
								<View style={styles.callout}>
									<Text style={styles.calloutTitle}>{lugar.nombre}</Text>
									<Text style={styles.calloutText}>{lugar.tipologia}</Text>
								</View>
							</Callout>
						</Marker>
					)
				})}
			</MapView>
		</View>
	)
}

export default Mapa
