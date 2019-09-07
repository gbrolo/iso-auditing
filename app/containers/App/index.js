import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Sidebar from '../../components/Sidebar/Sidebar'
import HomePage from '../HomePage/index'
import ChecklistPage from '../ChecklistPage/ChecklistPage'
import SectionCompliancePage from '../SectionCompliancePage/SectionCompliancePage'

import GlobalStyle from '../../global-styles'

export default function App() {
	return (
		<div>
			<Sidebar />
			<div style={{ marginLeft: 55, padding: 55 }}>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/checklist" component={ChecklistPage} />
					<Route exact path="/section-compliance" component={SectionCompliancePage} />
					<Route component={HomePage} />
				</Switch>			
			</div>
		</div>
	);
}
