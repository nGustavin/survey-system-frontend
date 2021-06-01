import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Edit from './pages/Edit'

import Form from './pages/Form'
import Home from './pages/Home'
import Survey from './pages/Survey'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/create-survey" component={Form}/>
                <Route path="/survey/:id" component={Survey}/>
                <Route path="/survey-edit/:id" component={Edit}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes