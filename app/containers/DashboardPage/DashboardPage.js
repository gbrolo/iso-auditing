import React, { Component } from 'react'
import BarChartComponent from '../../components/BarChart/BarChartComponent';
import { verifyFileCreated } from '../../providers/Storage/storage';

class DashboardPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			verifiedLoad: false
		}
	}

	componentDidMount = () => {
		verifyFileCreated(this.props.history).then(
			this.setState({ verifiedLoad: true })
		).catch(error => {
			this.setState({ verifiedLoad: false })
		})
	}

	render = () => {
		return(
			<div className="wrapper center-aligning pd-10px">
				{
					this.state.verifiedLoad &&
					<BarChartComponent type='section' />
				}
			</div>
		)
	}
}

export default DashboardPage