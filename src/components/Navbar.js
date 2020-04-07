import React, { useState } from 'react'
import { View, TouchableHighlight, Image, Text } from 'react-native'
import styles from '../styles'
import { useHistory } from 'react-router-native'

const Navbar = () => {
	const history = useHistory()

	return (
		<View style={styles.containerNavbar}>
			<TouchableHighlight
				underlayColor="transparent"
				onPress={() => {
					history.push('/')
				}}
				style={styles.btnNavbar}
			>
				<Text style={styles.text_navbar}>Mapa</Text>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor="transparent"
				onPress={() => {
					history.push('/histaria-cali')
				}}
				style={styles.btnNavbar}
			>
				<Text style={styles.text_navbar}>Historia Caleña</Text>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor="transparent"
				onPress={() => {
					history.push('/SobreArquitectura')
				}}
				style={styles.btnNavbar}
			>
				<Text style={styles.text_navbar}>Arq. Republicana</Text>
			</TouchableHighlight>
			<TouchableHighlight
				underlayColor="transparent"
				onPress={() => {
					history.push('/proyecto')
				}}
				style={styles.btnNavbar}
			>
				<Text style={styles.text_navbar}>Proyecto</Text>
			</TouchableHighlight>
		</View>
	)
}

export default Navbar
