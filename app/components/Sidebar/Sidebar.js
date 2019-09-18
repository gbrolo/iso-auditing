import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { FaArrowLeft, FaArrowRight, FaChartBar, FaClipboardCheck, FaClipboardList, FaListOl, FaInfo, FaCog } from "react-icons/fa"

import './sidebar.css'

class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
            pathname: this.props.history.location.pathname,
            showSideBar: true
        }
    }   
    
    componentDidMount = () => {
        const { pathname } = this.state
    }    

    render = () => {
        const { open, showSideBar } = this.state
        console.log(this.props.history.location.pathname)
        return (
            <div>
                {
                    showSideBar &&
                    <div>
                        <div className='header flex-center font-family'>
                        {this.props.history.location.pathname.substr(1).toUpperCase()}
                    </div>
                    {
                        open &&
                        <div className='sidebar-container-open'>                
                            <div className='sidebar-option font-family' onClick={() => this.props.history.push('/dashboard')}>
                                <FaChartBar className="icon-separator-sidebar"/>Dashboard
                            </div>      
                            <div className='sidebar-option font-family' onClick={() => this.props.history.push('/checklist')}>
                                <FaClipboardCheck className="icon-separator-sidebar"/>Compliance Checklist
                            </div> 
                            <div className='sidebar-option font-family' onClick={() => this.props.history.push('/section-compliance')}>
                                <FaClipboardList className="icon-separator-sidebar"/>Compliance per Section
                            </div>   
                            <div className='sidebar-option font-family' onClick={() => this.props.history.push('/control-compliance')}>
                                <FaListOl className="icon-separator-sidebar"/>Compliance per Control
                            </div>   
                            <div className='sidebar-option font-family' onClick={() => this.props.history.push('/about')}>
                                <FaInfo className="icon-separator-sidebar"/>Information
                            </div>   
                            <div className='sidebar-option font-family' onClick={() => this.props.history.push('/config')}>
                                <FaCog className="icon-separator-sidebar"/>Configuration
                            </div>          

                            <div className='sidebar-arrow-container-open' onClick={() => this.setState({ open: !open })}>
                                <FaArrowLeft />
                            </div>
                        </div>
                    }

                    {
                        !open &&
                        <div className='sidebar-container-closed'>                
                            <div className='sidebar-option' onClick={() => this.props.history.push('/dashboard')}>
                                <FaChartBar />
                            </div>     
                            <div className='sidebar-option' onClick={() => this.props.history.push('/checklist')}>
                                <FaClipboardCheck />
                            </div> 
                            <div className='sidebar-option' onClick={() => this.props.history.push('/section-compliance')}>
                                <FaClipboardList />
                            </div> 
                            <div className='sidebar-option' onClick={() => this.props.history.push('/control-compliance')}>
                                <FaListOl />
                            </div>  
                            <div className='sidebar-option' onClick={() => this.props.history.push('/about')}>
                                <FaInfo />
                            </div>              
                            <div className='sidebar-option' onClick={() => this.props.history.push('/config')}>
                                <FaCog />
                            </div>  

                            <div className='sidebar-arrow-container-closed' onClick={() => this.setState({ open: !open })}>
                                <FaArrowRight />
                            </div>
                        </div>
                    }
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(Sidebar)