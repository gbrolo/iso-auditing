import React, { Component } from 'react'
import { Table, Input } from 'reactstrap'
import { calculateControlCompliance } from '../../providers/Storage/storage';

class StandardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            percentage: 0
        }
    }

    componentDidMount = () => {
        const percentage = calculateControlCompliance(this.props.standard.standard)

        this.setState({ percentage })
    }

    render = () => {                
        return(
            <tr>
                <td>{this.props.standard.standard}</td>
                <td>{this.props.standard.section}</td>
                <td>{this.state.percentage}%</td>
            </tr>
        )
    }
}

export default StandardComponent