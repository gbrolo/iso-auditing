import React, { Component } from 'react'
import BarChart from 'react-bar-chart'
import { calculateControlCompliance } from '../../providers/Storage/storage';

import * as consts from '../SectionComplianceTable/consts'

class BarChartComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: {
                width: 900,
                height: 500,
                data: [],
                margins: {top: 20, right: 20, bottom: 30, left: 50},                
                yAxisLabel: ''
            },
            selectedData: {
                width: 900,
                height: 500,
                data: [],
                margins: {top: 20, right: 20, bottom: 30, left: 50},                
                yAxisLabel: ''
            },
            selectedControl: false
        }
    }

    componentDidMount = () => {   
        const { data } = this.state     
        if (this.props.type === 'section') {
            let dataset = []            
            consts.standards.forEach(section => {
                const percentage = calculateControlCompliance(section.standard)
                const datasetElement = {}
                datasetElement['text'] = `${section.standard}`
                datasetElement['value'] = percentage

                dataset.push(datasetElement)
            })            

            data['data'] = dataset
        } 
        
        this.setState({ data })
    }

    handleBarClick = (element, id) => {        
        const { selectedData } = this.state
        let dataset = []    

        const includedControls = consts.controls.filter(control => control.standard.includes(element.text))        
        includedControls.forEach(control => {
            const percentage = calculateControlCompliance(control.standard)
            const datasetElement = {}
            datasetElement['text'] = `${control.standard}`
            datasetElement['value'] = percentage

            dataset.push(datasetElement)
        })            

        selectedData['data'] = dataset

        this.setState({ selectedData, selectedControl: true })
    }

    render = () => {  
        const { data, selectedData, selectedControl } = this.state             
        return(
            <div>
                <BarChart 
                    ylabel={data.yAxisLabel}
                    width={data.width}
                    height={data.height}
                    margin={data.margins}
                    data={data.data} 
                    onBarClick={this.handleBarClick}
                />

                {
                    selectedControl &&
                    <BarChart 
                        ylabel={selectedData.yAxisLabel}
                        width={selectedData.width}
                        height={selectedData.height}
                        margin={selectedData.margins}
                        data={selectedData.data}                         
                    />
                }
            </div>
        )
    }
}

export default BarChartComponent