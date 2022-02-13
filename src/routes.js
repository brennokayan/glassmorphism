import React from "react";
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Pages/Home'
function Routes(){
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={() => Home()} />
            <Route exact path='/home' component={() => <h2>22222</h2>}/>
        </Switch>
    </BrowserRouter>
  );
}
  


export default Routes;