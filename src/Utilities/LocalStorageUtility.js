import React from 'react'

const masterBoardStorage = (masterBoardData) => {

    console.log('hhjkj')
    return(
        localStorage.setItem('masterBoard', JSON.stringify(masterBoardData.masterBoards))
    )
    
}

const masterMediumStorage = (masterMediumdData) => {

    console.log('hhjkj')
    return(
        localStorage.setItem('masterMedium', JSON.stringify(masterMediumdData.masterMediums))
    )
    
}

const masterClassStorage = (masterClassData) => {

    console.log('hhjkj')
    return(
        localStorage.setItem('masterClass', JSON.stringify(masterClassData.masterClasses))
    )
    
}

const fetchmasterBoardStorage = () => {

    const BoardData=JSON.parse(localStorage.getItem('masterBoard'))

    console.log('BoardData' ,BoardData)

    return BoardData

   
}

const fetchmasterMediumStorage = () => {

    const MediumData=JSON.parse(localStorage.getItem('masterMedium'))

    console.log('BoardData' ,MediumData)
    
    return MediumData

   
}

const fetchmasterClassStorage = () => {

    const ClassData=JSON.parse(localStorage.getItem('masterClass'))

    console.log('BoardData' ,ClassData)

    return ClassData

   
}

export  {masterBoardStorage ,masterMediumStorage ,masterClassStorage,fetchmasterBoardStorage ,fetchmasterMediumStorage ,fetchmasterClassStorage }

