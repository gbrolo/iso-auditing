import React, { Component } from 'react'
import { Table, Input } from 'reactstrap'
import { saveDataForSubSubControl, getSubSubControl } from '../../providers/Storage/storage';

class StandardComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            percentage: 0,
            checklistValue: 0,
            findings: ''
        }
    }

    calculateStatusAndSaveData = (checklistValue) => {
        const { findings } = this.state
        
        if (checklistValue === '') {
            checklistValue = 0
        } else {
            checklistValue = parseInt(checklistValue)
        }

        const percentage = ((checklistValue / this.props.standard.points.length) * 100)

        saveDataForSubSubControl(this.props.standard.standard, checklistValue, findings, percentage)

        this.setState({ percentage, checklistValue })
    }

    saveFindings = (findings) => {
        const { percentage, checklistValue } = this.state

        saveDataForSubSubControl(this.props.standard.standard, checklistValue, findings, percentage)

        this.setState({ findings })
    }

    componentDidMount = () => {
        if (this.props.index !== 0) {
            const data = getSubSubControl(this.props.standard.standard)
            this.setState({ percentage: data.status, checklistValue: data.checklistValue, findings: data.findings })
        }
    }

    render = () => {        
        const toRender = this.props.index === 0 ? 
            this.props.standard : 
            <tr>
                <th style={{ width: '80px' }} scope="row">
                    <Input value={this.state.checklistValue} onChange={(e) => this.calculateStatusAndSaveData(e.target.value)} className="table-input" type="numeric" />
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
                    <Input value={this.state.findings} onChange={(e) => this.saveFindings(e.target.value)} className="table-input" type="textarea" />
                </td>
                <td style={{ width: '60px' }}>
                    {this.state.percentage}%
                </td>
            </tr>
        return toRender
    }
}

export default StandardComponent