import React, { Component } from 'react'
import { Button, Label } from 'reactstrap'
import { retrieveFileInLocalStorage, saveToLocalStorageFromFileRead } from '../../providers/Storage/storage';

const FileSaver = require('file-saver')

class SaveFileComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fileContent: '',
            fileName: 'ISO27001-2013-',
            fileType: 'text/plain;charset=utf-8',
            loaded: false
        }
    }

    loadDataFromLocalStorage = () => {
        const { fileName } = this.state
        const fileFromLocalStorage = retrieveFileInLocalStorage()
        const newFileName = `${fileName}${fileFromLocalStorage.fileConfig.filename}`
        const fileContent = JSON.stringify(fileFromLocalStorage)
        this.setState({ fileContent, fileName: newFileName, loaded: true })
    }

    saveFile = () => {
        const { fileContent, fileName, fileType } = this.state
        const file = new File([fileContent], fileName, { type: fileType })
        FileSaver.saveAs(file)
    }

    handleFileLoad = (file) => {
        let fileReader = new FileReader()
        fileReader.onloadend = (e) => {
            const content = fileReader.result            
            saveToLocalStorageFromFileRead(content)
        }
        fileReader.readAsText(file)

    }

    componentDidMount = () => {
        this.loadDataFromLocalStorage()
    }

    render = () => {
        const { loaded } = this.state
        return(
            <div className="wrapper center-aligning pd-10px">
                {
                    loaded && this.props.type === 'save' &&
                    <div className="wrapper center-aligning">
                        <Label><strong>SAVE FILE</strong></Label>
                        <Button outline color='secondary' onClick={() => this.saveFile()}>SAVE TO TEXT FILE</Button>
                    </div>
                }
                <hr />
                {
                    loaded && this.props.type === 'load' &&
                    <div className="wrapper center-aligning">
                        <Label><strong>LOAD FILE</strong></Label>
                        <input type='file' accept='.txt' onChange={(e) => this.handleFileLoad(e.target.files[0])} />
                    </div>
                }
            </div>
        )
    }
}

export default SaveFileComponent