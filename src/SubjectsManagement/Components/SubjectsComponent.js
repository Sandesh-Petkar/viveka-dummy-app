import React, { Component } from 'react'
import Navbar from '../../NavBar'
import {getSubjectData} from '../Actions/SubjectAction'
import { connect } from 'react-redux'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './SubjectComponent.css'
import RadioButton from './RadioButton' 

class Subject extends Component {

    constructor(){
        super()
            this.state = {
              board: null,
              medium: null,
              class: null

            }
      }
   
      validate = () => {

       let isValid=false

        if(this.state.board && this.state.medium && this.state.class){
             isValid = true
        }
        return isValid
      }

      handleBoardClick = (event) => {
       
        const newBoardvalue = event.target.value
     
        this.setState({
            board:newBoardvalue
        
        },() => {
            if(this.validate()){
                this.props.getSubject({
                    board:this.state.board,
                    medium:this.state.medium,
                    class:this.state.class
                })
                
            }
        })

      }

      handleMediumClick = (event) => {
        
        const newMediumvalue = event.target.value
        this.setState({
            medium: newMediumvalue
        
        },() => {
            if(this.validate()){
                this.props.getSubject({
                    board:this.state.board,
                    medium:this.state.medium,
                    class:this.state.class
                })
               
            }
        })

               
      }

      handleClassClick = (event) => {
       
        const newClassvalue = event.target.value
        this.setState({
            class: newClassvalue
        
        },() => {
            if(this.validate()){
                
                this.props.getSubject(
                    {
                        board:this.state.board,
                        medium:this.state.medium,
                        class:this.state.class
                    }
                )
             
            }
        })

      }


    render(){

        console.log('subprops' ,this.props)     
        console.log('state' ,this.state)
        return(
            <div>
                    <Navbar/>
                   <h1>Welcome to Subjects Page</h1>
                   <RadioButton
                      handleBoardClick = {this.handleBoardClick}
                      handleMediumClick = {this.handleMediumClick}
                      handleClassClick = {this.handleClassClick}
                   
                   />

                   {
                       (this.props.subState.subjectData.masterSubjects)
                       ?
                       <div >
                           
                               <h2>Subjects</h2>
                           {this.props.subState.subjectData.masterSubjects.map((subject,index)=>{
                                return(
                                    <Card className='subjectCard'>
                                        <CardContent >

                                            <Typography key={index+1}>
                                            {subject.name}
                                            </Typography>

                                                <img
                                                src="https://www.adazing.com/wp-content/uploads/2019/02/open-book-clipart-03.png" 
                                                alt="Book"  className='subjectimage'  />
                                            
                                        </CardContent>
                                    </Card>
                                    
                                )
                           })
                           
                           }
                          
   
                       </div>
                       :null
                   }
       
            </div>
        )

    }

   
}

const mapStateToProps = (state) => {
    return{
        subState : state.subjectData
    }
   
}

const mapDispatchToProps = dispatch => {
    
    return {

        getSubject: (formData) => dispatch(getSubjectData(formData)),

       }
  }

export default connect( mapStateToProps,mapDispatchToProps )(Subject)

