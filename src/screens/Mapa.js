import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import MapView, { Marker, Callout, Polyline } from 'react-native-maps'
import styles from '../styles'
import lugares from '../data/lugares.json'
import { useHistory } from 'react-router-native'
import { MapStyle, MapStyleElectric, Blue } from '../components/MapStyle'
import * as geolib from 'geolib'

const Mapa = () => {
	const history = useHistory()

	const [region, setRegion] = useState(null)
	const [MasCercano, setMasCercano] = useState(null)

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((position) => {
			const lat = position.coords.latitude
			const lon = position.coords.longitude

			const current = { lat, lon }
			const closest = lugares
				.map((lugar) => {
					const coord = {
						lat: lugar.gps[0],
						lng: lugar.gps[1],
					}
					return { coord, dist: geolib.getDistance(current, coord) }
				})
				.sort((a, b) => a.dist - b.dist)[0]
			console.log(closest)
			setMasCercano(closest.coord)

			const accuracy = position.coords.accuracy
			calDeta(lat, lon, accuracy)
		})
	}, [])

	const calDeta = (lat, lon, accuracy) => {
		const oneDegreeOfLongitudInMeters = 111.32
		const circunference = 40075 / 360
		const latDelta = accuracy * (1 / (Math.cos(lat) * circunference))
		const lonDelta = accuracy / oneDegreeOfLongitudInMeters

		setRegion({
			latitude: lat,
			longitude: lon,
			latitudeDelta: latDelta,
			longitudeDelta: lonDelta,
		})
	}

	const MiUbicacion = () => {
		return {
			latitude: region.latitude,
			longitude: region.longitude,
		}
	}

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
				{region ? (
					<Marker
						coordinate={MiUbicacion()}
						image={require('../img/me2.png')}
					/>
				) : null}
				{region ? (
					<Polyline
						coordinates={[
							{ latitude: MasCercano.lat, longitude: MasCercano.lng },
							{ latitude: region.latitude, longitude: region.longitude },
						]}
						strokeColor="#5AAFFE" // fallback for when `strokeColors` is not supported by the map-provider
						strokeWidth={5}
					/>
				) : null}
				{lugares.map((lugar) => {
					return (
						<Marker
							key={lugar.id}
							image={require('../img/marker1.png')}
							coordinate={{
								latitude: lugar.gps[0],
								longitude: lugar.gps[1],
							}}
							onPress={() => {
								console.log(
									`Latitude: ${lugar.gps[0]}, Longitude: ${lugar.gps[1]}`
								)
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
