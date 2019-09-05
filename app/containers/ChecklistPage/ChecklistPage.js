import React, { Component } from 'react'
import './checklist.css'
import ChecklistTable from '../../components/ChecklistTable/ChecklistTable'

class ChecklistPage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render = () => {
        return(
            <div className="wrapper center-aligning pd-10px">
                <ChecklistTable />
            </div>
        )
    }
}

export default ChecklistPage