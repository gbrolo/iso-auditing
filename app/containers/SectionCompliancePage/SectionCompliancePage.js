import React, { Component } from 'react'
import SectionComplianceTable from '../../components/SectionComplianceTable/SectionComplianceTable'
import { verifyFileCreated } from '../../providers/Storage/storage';

class SectionCompliancePage extends Component {
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
                    <SectionComplianceTable type={this.props.type || 'section'}/>                
				}
            </div>
        )
    }
}

export default SectionCompliancePage