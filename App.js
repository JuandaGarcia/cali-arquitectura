import React from 'react'
import { NativeRouter, Switch, Route } from 'react-router-native'
import Mapa from './src/screens/Mapa'
import Lugar from './src/screens/Lugar'
import SobreArquitectura from './src/screens/SobreArquitectura'
import Proyecto from './src/screens/Proyecto'
import Layout from './src/components/Layout'
import HistoriaCali from './src/screens/HistoriaCali'

const App = () => {
	return (
		<NativeRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Lugar} />
					<Route exact path="/info-lugar/:id" component={Lugar} />
					<Route exact path="/histaria-cali" component={HistoriaCali} />
					<Route
						exact
						path="/SobreArquitectura"
						component={SobreArquitectura}
					/>
					<Route exact path="/proyecto" component={Proyecto} />
				</Switch>
			</Layout>
		</NativeRouter>
	)
}

export default App
