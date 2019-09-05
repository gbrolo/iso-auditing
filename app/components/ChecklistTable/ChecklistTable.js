import React, { Component } from 'react'
import { Table, Input } from 'reactstrap'

class ChecklistTable extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render = () => {
        return(
            <div className="wrapper">
                <Table bordered hover size="sm" responsive>
                    <thead>
                        <tr>
                            <th>Checklist</th>
                            <th>Standard</th>
                            <th>Section</th>
                            <th>Initial Assessement Points</th>
                            <th>Findings</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>A.5</td>
                            <td>Information Security Policies</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>A.5.1</td>
                            <td>Management direction for information security</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>

                        <tr>
                            <th style={{ width: '100px' }} scope="row">
                                <Input className="table-input" type="numeric" />
                            </th>
                            <td style={{ width: '100px' }}>A.5.1.1</td>
                            <td>Policies for information security</td>
                            <td>
                                <ol>
                                    <li>Do Security policies exist?</li>
                                    <li>Are all policies approved by management?</li>
                                    <li>Are policies properly communicated to employees?</li>
                                </ol>
                            </td>
                            <td>
                                <Input className="table-input" type="textarea" />
                            </td>
                            <td style={{ width: '100px' }}></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default ChecklistTable