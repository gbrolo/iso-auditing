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
                            consts.standards.map((standard, index) => {
                                return(
                                    <StandardComponent key={index} standard={standard} />
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