import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import  './Login.css'
import {Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {postLoginData }from './/Redux/Actions/Actions'
import {fetchMasterData }from './/Redux/Actions/MasterAction'
import { Box, Typography } from '@material-ui/core';

const classes = {
    paper: {
      height: 140,
      width: 300,
      marginTop: 15,
    },
    control: {
      padding: 100,
      
      
    },
    background : {
        backgroundColor:'yellow',
        border:'solid'
    }
  }

class Login extends React.Component {
    
    
    constructor () {
        super()

        this.state={

            userName:'',
            password:'',
          
 
        }
    }

    componentDidMount(){

        this.props.fetchMaster()

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log('change',e.target.value)
    }

    handleSubmit = () => {
        const formData = {
            userName:this.state.userName,
            password:this.state.password
        }

        console.log('data',formData)
        this.setState({
            userName:'',
            password:'',
        })

        this.props.postFormData(formData)
    }
    render(){


        console.log('---props---',this.props)
        
        return(
            <div className='wrapper'>
                
                <Grid container xs={12}>
                    <Grid className='background-col' 
                          justify="center"
                          alignItems="center" 
                          container  xs={6}>
                        <Grid item>
                            <Typography variant="h1" component="h2">
                                viveka
                            </Typography>
                             
                        </Grid>
                        
                    </Grid>

                        <Grid  xs={6}>

                        <Grid item  justify='center' alignItems="flex-end" xs={8}>
                            
                            <TextField
                                label="Email or Phone"
                                type='text'
                                style={{margin:10,width:300}}
                                id="userName"
                                name="userName"
                                value={this.state.userName}
                                onChange={this.handleChange}
                            />
                            
                              
                      </Grid>

                        <Grid item justify='center' alignItems="flex-end"  xs={8}>
                            
                            <TextField
                            label="password"
                            type='text'
                            id="password"
                            name="password"
                            style={{margin:10,width:300}}
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                            
                            
                    </Grid>

                    <Grid item xs={8}>
                            <Button className='button' style={{margin:10}} onClick={this.handleSubmit} variant="contained"  color="primary">
                                Login
                            </Button>

                        </Grid>


                        {/* <Grid item xs={12}>
                            <div className='button-1'>
                            <Link className='button' onClick={this.handleSubmit} variant="contained" 
                            color="primary">
                               ForgotPassword
                            </Link>

                            </div>
                        </Grid> */}

                        </Grid>
                           

                </Grid>             

                              
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return{
        profileState : state.userData
    }
   
}

const mapDispatchToProps = dispatch => {
    
    return {

        postFormData: (formData) => dispatch(postLoginData(formData)),
        fetchMaster: () => dispatch(fetchMasterData())

       }
  }

export default connect( mapStateToProps,mapDispatchToProps )(Login)


