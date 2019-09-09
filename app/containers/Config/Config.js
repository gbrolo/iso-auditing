import React, { Component } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import ConfigComponent from '../../components/ConfigComponent/ConfigComponent';
import { retrieveFileInLocalStorage } from '../../providers/Storage/storage';

class Config extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: '1'
        }
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab })
        }
    }

    render = () => {
        return(
            <div className="wrapper center-aligning pd-10px">
                <Nav tabs>
                    <NavItem>
                        <NavLink onClick={() => { this.toggle('1') }}>Create document</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink onClick={() => { this.toggle('2') }}>Save and Load document</NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <ConfigComponent />
                    </TabPane>
                    <TabPane tabId="2">
                        
                    </TabPane>
                </TabContent>
            </div>
        )
    }
}

export default Config