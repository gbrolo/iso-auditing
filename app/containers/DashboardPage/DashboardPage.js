import React, { Component } from 'react'
import BarChartComponent from '../../components/BarChart/BarChartComponent';

class DashboardPage extends Component {
	constructor(props) {
		super(props)

		this.state = {

		}
	}

	render = () => {
		return(
			<div className="wrapper center-aligning pd-10px">
				<BarChartComponent type='section' />
			</div>
		)
	}
}

export default DashboardPage