import React, { Component } from 'react'
import { Table, Input } from 'reactstrap'

class StandardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            percentage: 0
        }
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