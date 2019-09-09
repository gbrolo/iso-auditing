import React, { Component } from 'react'
import { Card, CardText, CardBody, CardTitle, CardSubtitle, CardHeader, CardFooter, Input, Label, Button } from 'reactstrap'

import * as consts from './consts'
import './config.css'
import { createFileInLocalStorage } from '../../providers/Storage/storage';

class ConfigComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fileConfig: {
                filename: null,
                client: null,
                description: null
            }
        }
    }

    editConfigProperty = (property, value) => {
        const { fileConfig } = this.state
        fileConfig[property] = value
        this.setState({ fileConfig })
    }

    render = () => {
        const { fileConfig } = this.state

        return(
            <Card>
                <CardHeader>
                    <h5>{ consts.CONFIG_HEADER_TITLE }</h5>
                </CardHeader>
                <CardBody>
                    <Label for='doc_title'>{ consts.LABEL_DOCUMENT_TITLE }</Label>
                    <Input onChange={(e) => this.editConfigProperty('filename', e.target.value)} className='config-input' id='doc_title' type="text" />
                    <Label for='doc_client'>{ consts.LABEL_CLIENT_NAME }</Label>
                    <Input onChange={(e) => this.editConfigProperty('client', e.target.value)} className='config-input' id='doc_client' type="text" />
                    <Label for='doc_desc'>{ consts.DESCRIPTION }</Label>
                    <Input onChange={(e) => this.editConfigProperty('description', e.target.value)} className='config-input config-textarea' id='doc_desc' type="textarea" />
                </CardBody>
                <CardFooter>
                    <Button onClick={() => createFileInLocalStorage(fileConfig)} color='secondary' outline>{ consts.BUTTON_TEXT }</Button>
                </CardFooter>
            </Card>
        )
    }
}

export default ConfigComponent