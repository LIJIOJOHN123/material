import React from 'react';
import Header from './component/Layout/Header'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Register from './component/Auth/Register';
import Login from './component/Auth/Login';
import ChannelList from './component/Channel/ChannelList';



const Router = () => {
 return (
  <BrowserRouter>
   <Header />
   <Switch>
    {/************************************** Auth Router *********************************/}

    <Route exact path='/register' component={Register} />
    <Route exact path='/login' component={Login} />

    {/************************************** Channel *********************************/}
    <Route exact path='/' component={ChannelList} />

   </Switch>
  </BrowserRouter>
 );
}

export default Router;