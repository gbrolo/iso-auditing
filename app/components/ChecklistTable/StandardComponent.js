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
        console.log('index', this.props.index)
        const toRender = this.props.index === 0 ? 
            this.props.standard : 
            <tr>
                <th style={{ width: '80px' }} scope="row">
                    <Input className="table-input" type="numeric" />
                </th>
                <td style={{ width: '100px' }}>{this.props.standard.standard}</td>
                <td>{this.props.standard.section}</td>
                <td>
                    <ol>
                        {
                            this.props.standard.points.map((point, index) => {
                                return(
                                    <li key={index}>{point}</li>
                                )
                            })
                        }                        
                    </ol>
                </td>
                <td style={{ width: '300px' }}>
                    <Input className="table-input" type="textarea" />
                </td>
                <td style={{ width: '60px' }}>
                    {this.state.percentage}%
                </td>
            </tr>
        return toRender
    }
}

export default StandardComponent