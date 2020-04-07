import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
	containerNavbar: {
		width: Dimensions.get('window').width,
		height: 60,
		backgroundColor: '#5AAFFE',
		position: 'absolute',
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around',
		flexDirection: 'row',
	},
	text_navbar: {
		color: 'white',
		fontSize: 10,
	},
})

export default styles
