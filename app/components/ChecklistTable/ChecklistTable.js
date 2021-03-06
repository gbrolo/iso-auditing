import React, { Component } from 'react'
import { Table, Input } from 'reactstrap'

import * as consts from './consts'
import StandardComponent from './StandardComponent';

class ChecklistTable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render = () => {
        return(
            <div className="wrapper">
                <Table hover size="sm" responsive>
                    <thead>
                        <tr style={{ backgroundColor: '#181818', color: '#fff' }}>
                            <th>Checklist</th>
                            <th>Standard</th>
                            <th>Section</th>
                            <th>Initial Assessement Points</th>
                            <th>Findings</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    
                    {
                        consts.checklistData.map((mainSection, index) => {
                            return(
                                <tbody key={index}>
                                    <tr style={{ backgroundColor: '#181818', color: '#fff' }}>
                                        <th scope="row"></th>
                                        <th scope="row">{mainSection.mainSection}</th>
                                        <th scope="row" colSpan="4">{mainSection.section}</th>                                                                                
                                    </tr>
                                    
                                    {
                                        mainSection.subSection.map((subSection, idx) => {
                                            const firstTr = <tr key={idx} style={{ backgroundColor: '#181818', color: '#fff' }}>
                                                                <th scope="row"></th>
                                                                <td>{subSection.standard}</td>
                                                                <td colSpan="4">{subSection.section}</td>                                                   
                                                            </tr>
                                            
                                            return [firstTr, ...subSection.standards].map((standard, i) => {
                                                return(
                                                    <StandardComponent key={i} index={i} standard={standard}/>
                                                )
                                            })
                                        })
                                    }
                                </tbody>
                            )
                        })
                    }
                </Table>
            </div>
        )
    }
}

export default ChecklistTable