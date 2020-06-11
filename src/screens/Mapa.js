import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import MapView, { Marker, Callout, Polyline } from 'react-native-maps'
import styles from '../styles'
import lugares from '../data/lugares.json'
import { useHistory } from 'react-router-native'
import { MapStyle, MapStyleElectric, Blue } from '../components/MapStyle'
import * as geolib from 'geolib'
import polyline from '@mapbox/polyline'

const Mapa = () => {
	const history = useHistory()
	const RutasColores = ['#5AAFFE', '#8AFF57', '#FFAB57', '#EB57FF', '#FF5757']

	const [region, setRegion] = useState(null)
	const [MasCercanoArray, setMasCercanoArray] = useState(null)
	const [Ruta, setRuta] = useState(null)

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(async (position) => {
			const lat = position.coords.latitude
			const lon = position.coords.longitude

			const current = { lat, lon }

			const accuracy = position.coords.accuracy
			setRegion(current)
			const LugaresCercanos = CalcularMasCercanos(current)
			const RutaDirecciones = []
			RutaDirecciones.push(await getDirections(current, LugaresCercanos[1]))
			RutaDirecciones.push(
				await getDirections(LugaresCercanos[1], LugaresCercanos[2])
			)
			RutaDirecciones.push(
				await getDirections(LugaresCercanos[2], LugaresCercanos[3])
			)
			RutaDirecciones.push(
				await getDirections(LugaresCercanos[3], LugaresCercanos[4])
			)
			RutaDirecciones.push(
				await getDirections(LugaresCercanos[4], LugaresCercanos[5])
			)
			setRuta(RutaDirecciones)
			//calDeta(lat, lon, accuracy)
		})
	}, [])

	const CalcularMasCercanos = (lugarInicial) => {
		const LugaresCernanos = [lugarInicial]

		do {
			const closest = lugares
				.map((lugar) => {
					const coord = {
						lat: lugar.gps[0],
						lon: lugar.gps[1],
					}

					if (
						coord.lat !== LugaresCernanos[LugaresCernanos.length - 1].lat &&
						coord.lon !== LugaresCernanos[LugaresCernanos.length - 1].lon
					) {
						return {
							coord,
							dist: geolib.getDistance(
								LugaresCernanos[LugaresCernanos.length - 1],
								coord
							),
						}
					}
				})
				.sort((a, b) => a.dist - b.dist)[0]

			const YaEsta = LugaresCernanos.findIndex(
				(element) => element === LugaresCernanos[2]
			)

			LugaresCernanos.push(closest.coord)
		} while (LugaresCernanos.length !== 6)

		console.log('---------')
		console.log(LugaresCernanos)

		return LugaresCernanos
	}

	const getDirections = async (startLoc, desLoc) => {
		try {
			const resp = await fetch(
				`https://maps.googleapis.com/maps/api/directions/json?origin=${startLoc.lat},${startLoc.lon}&destination=${desLoc.lat},${desLoc.lon}&key=AIzaSyAbOQiex_C_CJzUPH9O4xIPfkFrNOqGDJQ`
			)
			const respJson = await resp.json()
			const response = respJson.routes[0]
			const distanceTime = response.legs[0]
			const distance = distanceTime.distance.text
			const time = distanceTime.duration.text
			const points = polyline.decode(
				respJson.routes[0].overview_polyline.points
			)
			const coords = points.map((point) => {
				return {
					latitude: point[0],
					longitude: point[1],
				}
			})
			return coords
		} catch (error) {
			console.log('Error: ', error)
		}
	}

	// const calDeta = (lat, lon, accuracy) => {
	// 	const oneDegreeOfLongitudInMeters = 111.32
	// 	const circunference = 40075 / 360
	// 	const latDelta = accuracy * (1 / (Math.cos(lat) * circunference))
	// 	const lonDelta = accuracy / oneDegreeOfLongitudInMeters

	// 	setRegion({
	// 		lat: lat,
	// 		lon: lon,
	// 		latitudeDelta: latDelta,
	// 		longitudeDelta: lonDelta,
	// 	})
	// }

	const MiUbicacion = () => {
		return {
			latitude: region.lat,
			longitude: region.lon,
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
				{Ruta
					? Ruta.map((linea, index) => {
							return (
								<Polyline
									key={index}
									coordinates={linea}
									strokeColor={RutasColores[index]}
									strokeWidth={5}
								/>
							)
					  })
					: null}
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
