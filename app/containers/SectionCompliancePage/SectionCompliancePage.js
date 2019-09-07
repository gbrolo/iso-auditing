import React, { Component } from 'react'
import SectionComplianceTable from '../../components/SectionComplianceTable/SectionComplianceTable'

class SectionCompliancePage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render = () => {
        return(
            <div className="wrapper center-aligning pd-10px">
                <SectionComplianceTable type={this.props.type || 'section'}/>                
            </div>
        )
    }
}

export default SectionCompliancePage