import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from '../HomePage/index'

import GlobalStyle from '../../global-styles'

export default function App() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route component={HomePage} />
				</Switch>
			<GlobalStyle />
		</div>
	);
}
