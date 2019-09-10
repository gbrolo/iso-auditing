import * as data from '../../components/ChecklistTable/consts'
import * as CD from './controlData'
const checklistData = data.checklistData
const HashMap = require('hashmap')

function createFileInLocalStorage(fileConfig) {
    const controlData = CD.controlData
    const file = {
        fileConfig: fileConfig,
        controlData: controlData
    }

    console.log(file)
    localStorage.setItem('iso-data', JSON.stringify(file))
}

function saveToLocalStorageFromFileRead(fileContent) {
    localStorage.setItem('iso-data', fileContent)
}

function retrieveFileInLocalStorage() {
    return JSON.parse(localStorage.getItem('iso-data'))
}

function saveDataForSubSubControl(subSubControl, checklistValue, findings, status) {
    const data = retrieveFileInLocalStorage()    

    let controlData = data.controlData.map((standard, index) => {
        if (standard.standard === subSubControl) {
            standard.checklistValue = checklistValue
            standard.findings = findings
            standard.status = status

            return standard
        } else return standard
    })

    data['controlData'] = controlData

    localStorage.setItem('iso-data', JSON.stringify(data))
}

function getSubSubControl(subSubControl) {
    const controlData = retrieveFileInLocalStorage().controlData
    return controlData.filter(standard => standard.standard === subSubControl)[0]
}

function calculateControlCompliance(control) {
    const standardsArray = retrieveFileInLocalStorage().controlData.filter(standard => standard.standard.includes(control))
    const totalElements = standardsArray.length
    let sum = 0

    standardsArray.forEach(standard => {
        sum = sum + standard.status
    })

    return sum / totalElements
}

function verifyFileCreated(history) {
    return new Promise((resolve, reject) => {
        if (localStorage.getItem('iso-data') === null) {
            history.push('/')
            reject('File not created')
        } else {
            resolve('File created')
        }
    })
}

export {
    createFileInLocalStorage,
    retrieveFileInLocalStorage,
    saveDataForSubSubControl,
    getSubSubControl,
    calculateControlCompliance,
    saveToLocalStorageFromFileRead,
    verifyFileCreated
}