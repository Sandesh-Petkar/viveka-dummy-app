import React from 'react'
import {fetchmasterBoardStorage , fetchmasterMediumStorage , fetchmasterClassStorage } from '../../Utilities/LocalStorageUtility'
import './RadioButton.css' 

const RadioButton = (props) => {

   const BoardData = fetchmasterBoardStorage()

   const MediumData = fetchmasterMediumStorage()

   const ClassData = fetchmasterClassStorage()


    return (
        <div>
            <div>
            
            <h3>Select-Board</h3>

                { 
                    BoardData.map((board ,index)=>{
                        return(
                            <div className='board'>
                            <input type='radio'
                            id={index}
                            name="board"
                            value={board.boardId}
                            onClick={props.handleBoardClick}
                            
                            />
                            <label >{board.board}</label>
                            </div> 
                           
                        )
                    })
                } 

            </div>

            <div>
            <h3>Select Medium</h3>

            { 
                    MediumData.map((medium,index)=>{
                        return(
                            <div className='medium'>
                            <input type='radio'
                            id={index}
                            name="medium"
                            value={medium.mediumId}
                            onClick={props.handleMediumClick}
                           
                            />
                            <label >{medium.medium}</label>
                            </div> 
                           
                        )
                    })
                } 
                  
            </div>

            <div>
           <h3>Select Class</h3>


           { 
                    ClassData.map((Class,index)=>{
                        return(
                            <div className='class'>
                            <input type='radio'
                            id={index}
                            name="class"
                            value={Class.classId}
                            onClick={props.handleClassClick}
                            />
                            <label >{Class.classs}</label>
                            </div> 
                           
                        )
                    })
                } 
                
        </div>
            
        </div>
    )
}

export default RadioButton