import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Sidebar from '../../components/Sidebar/Sidebar'
import HomePage from '../HomePage/index'

import GlobalStyle from '../../global-styles'

export default function App() {
	return (
		<div>
			<Sidebar />
			<div style={{ marginLeft: 55, padding: 55 }}>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route component={HomePage} />
				</Switch>			
			</div>
		</div>
	);
}
