import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
	containerNavbar: {
		width: Dimensions.get('window').width,
		height: '8%',
		backgroundColor: '#5AAFFE',
		position: 'absolute',
		bottom: 0,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		zIndex: 5000,
	},
	text_navbar: {
		color: 'white',
		fontSize: 10,
	},
	navbar_item: {
		alignItems: 'center',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		height: '100%',
		width: Dimensions.get('window').width / 4,
	},
	icon_navbar: {
		width: 26,
		height: 26,
	},
	opacity: {
		opacity: 0.6,
	},
	img_lugar: {
		width: '100%',
		height: '100%',
		opacity: 0.7,
	},
	lugar_container: {
		height: '92%',
		zIndex: 0,
	},
	header_lugar: {
		height: '45%',
		backgroundColor: 'black',
	},
	title_header: {
		position: 'absolute',
		bottom: 65,
		left: 35,
	},
	nombre_lugar: {
		color: 'white',
		fontSize: 20,
		fontWeight: 'bold',
		maxWidth: '90%',
	},
	atras: {
		color: 'white',
		fontSize: 15,
		marginBottom: 10,
		marginLeft: 10,
	},
	icon_lugar: {
		width: 26,
		height: 26,
		marginBottom: 10,
	},
	gradient_semana: {
		width: '100%',
		height: '20%',
		position: 'absolute',
		bottom: 0,
	},
	contenido_lugar: {
		paddingVertical: 10,
		paddingHorizontal: 35,
	},
	texto_lugar: {
		display: 'flex',
		flexDirection: 'row',
	},
	mapStyle: {
		width: Dimensions.get('window').width,
		height: '96%',
	},
	makerIMG: {
		width: 30,
		height: 30,
		borderRadius: 5,
	},
	callout: {
		height: 70,
		maxWidth: Dimensions.get('window').width,
		borderRadius: 10,
		borderColor: '#685CF2',
		borderWidth: 2,
		backgroundColor: '#5AAFFE',
		marginBottom: 5,
		padding: 5,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	calloutTitle: {
		color: 'white',
		fontWeight: 'bold',
	},
	calloutText: {
		color: 'white',
	},
	backContainer: {
		position: 'absolute',
		top: 20,
		left: 35,
	},
	backContainerHijo: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
	},
	margin: {
		width: '100%',
		marginBottom: 20,
	},
})

export default styles
