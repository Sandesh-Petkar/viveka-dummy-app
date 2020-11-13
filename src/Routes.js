import React from 'react'
import { BrowserRouter , Route ,Switch} from 'react-router-dom'
import Landing from './LandingComponent'
import Login from './Login'
import DashBoard from './DashBoard'
import Boards from '../src/BoardManagement/Components/Boards'
import Subjects from '../src/SubjectsManagement/Components/SubjectsComponent'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/' component={Landing}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/dashBoard' component={DashBoard}/>
                <Route exact path='/boards' component={Boards}/>
                <Route exact path='/subjects' component={Subjects}/>
                <Route exact path='/profile' component={DashBoard}/>
                
            </Switch>

        </BrowserRouter>
    )
}

export default Routes

