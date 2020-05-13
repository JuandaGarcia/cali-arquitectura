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
	const [Ruta, setRuta] = useState(null)

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
			getDirections()

			const accuracy = position.coords.accuracy
			calDeta(lat, lon, accuracy)
		})
	}, [])

	const getDirections = async (startLoc, desLoc) => {
		try {
			const resp = await fetch(
				`https://maps.googleapis.com/maps/api/directions/json?origin=3.4776205,-76.519199&destination=3.462671,-76.529105&key=AIzaSyAbOQiex_C_CJzUPH9O4xIPfkFrNOqGDJQ`
			)
			const respJson = await resp.json()
			const response = respJson.routes[0]
			const distanceTime = response.legs[0]
			const distance = distanceTime.distance.text
			const time = distanceTime.duration.text
			const points = Polyline.decode(
				respJson.routes[0].overview_polyline.points
			)
			console.log(points)
			const coords = points.map((point) => {
				return {
					latitude: point[0],
					longitude: point[1],
				}
			})
			setRuta(coords)
		} catch (error) {
			console.log('Error: ', error)
		}
	}

	const calDeta = (lat, lon, accuracy) => {
		const oneDegreeOfLongitudInMeters = 111.32
		const circunference = 40075 / 360
		const latDelta = accuracy * (1 / (Math.cos(lat) * circunference))
		const lonDelta = accuracy / oneDegreeOfLongitudInMeters

		console.log(lat)
		console.log(lon)

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
				{Ruta ? (
					<Polyline coordinates={Ruta} strokeColor="#5AAFFE" strokeWidth={5} />
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
