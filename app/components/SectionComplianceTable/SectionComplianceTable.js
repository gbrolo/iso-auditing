import React, { Component } from 'react'
import { Table, Input } from 'reactstrap'

import * as consts from './consts'
import StandardComponent from './StandardComponent';

class SectionComplianceTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render = () => {
        return(
            <div className="wrapper">
                <Table dark hover size="sm" responsive>
                    <thead>
                        <tr style={{ backgroundColor: '#181818', color: '#fff' }}>
                            <th>Standard</th>
                            <th>Section</th>
                            <th>Status</th>
                        </tr>

                        {
                            this.props.type === 'section' &&
                            consts.standards.map((standard, index) => {
                                return(
                                    <StandardComponent type={'standard'} key={index} standard={standard} />
                                )
                            })
                        }

                        {
                            this.props.type === 'control' &&
                            consts.controls.map((control, index) => {
                                return(
                                    <StandardComponent type={'control'} key={index} standard={control} />
                                )
                            })
                        }
                    </thead>
                    <tbody>

                    </tbody>                    
                </Table>
            </div>
        )
    }
}

export default SectionComplianceTable