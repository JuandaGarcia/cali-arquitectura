import React, { useState } from 'react'
import { View, TouchableHighlight, Image, Text } from 'react-native'
import styles from '../styles'
import { useHistory } from 'react-router-native'

const Navbar = () => {
	const history = useHistory()
	const [opacity, setOpacity] = useState([
		'',
		styles.opacity,
		styles.opacity,
		styles.opacity,
		styles.opacity,
	])

	const changeOpacity = (position) => {
		for (let i = 0; i < opacity.length; i++) {
			if (i === position) {
				opacity[i] = ''
			} else {
				opacity[i] = styles.opacity
			}
		}
	}

	return (
		<View style={styles.containerNavbar}>
			<TouchableHighlight
				underlayColor="transparent"
				onPress={() => {
					history.push('/')
					changeOpacity(0)
				}}
			>
				<View style={[styles.navbar_item, opacity[0]]}>
					<Image
						style={styles.icon_navbar}
						source={require('../img/map.png')}
					/>
					<Text style={styles.text_navbar}>Mapa</Text>
				</View>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor="transparent"
				onPress={() => {
					history.push('/histaria-cali')
					changeOpacity(1)
				}}
			>
				<View style={[styles.navbar_item, opacity[1]]}>
					<Image
						style={styles.icon_navbar}
						source={require('../img/historia.png')}
					/>
					<Text style={styles.text_navbar}>Historia Caleña</Text>
				</View>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor="transparent"
				onPress={() => {
					history.push('/SobreArquitectura')
					changeOpacity(2)
				}}
			>
				<View style={[styles.navbar_item, opacity[2]]}>
					<Image
						style={styles.icon_navbar}
						source={require('../img/museo.png')}
					/>
					<Text style={styles.text_navbar}>Arq. Republicana</Text>
				</View>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor="transparent"
				onPress={() => {
					history.push('/proyecto')
					changeOpacity(3)
				}}
			>
				<View style={[styles.navbar_item, opacity[3]]}>
					<Image
						style={styles.icon_navbar}
						source={require('../img/proyecto.png')}
					/>
					<Text style={styles.text_navbar}>Proyecto</Text>
				</View>
			</TouchableHighlight>
		</View>
	)
}

export default Navbar
