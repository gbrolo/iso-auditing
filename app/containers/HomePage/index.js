import React, { Component } from 'react'
import ConfigComponent from '../../components/ConfigComponent/ConfigComponent'

import './home.css'

class HomePage extends Component {
	constructor(props) {
		super(props)

		this.state = {}

		this.redirect = this.redirect.bind(this)
	}

	redirect = () => {		
		this.props.history.push('/dashboard')
	}

	render = () => {
		console.log(this.props)
		return(
			<div style={{ height: '100vh' }} className="home-wrapper wrapper center-aligning pd-10px">
				<ConfigComponent withRedirect redirect={this.redirect}/>
			</div>
		)
	}
}

export default HomePage