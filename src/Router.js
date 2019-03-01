import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Bundle from './Bundle';


const Login = (props) => (<Bundle load={() => import('./modules/login')}>{(Login) => <Login {...props}/>}</Bundle>);
const Register = (props) => (<Bundle load={() => import('./modules/register')}>{(Register) => <Register {...props}/>}</Bundle>);
const Default = (props) => (<Bundle load={() => import('./modules/default')}>{(Default) => <Default {...props}/>}</Bundle>);
const Blog = (props) => (<Bundle load={() => import('./modules/blog')}>{(Blog) => <Blog {...props}/>}</Bundle>);
const User = (props) => (<Bundle load={() => import('./modules/user')}>{(User) => <User {...props}/>}</Bundle>);



const BasicRoute = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/default" component={Default}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/user" component={User}/>

      <Route exact path="/" component={Login}/>
      <Route exact
             component={Login}/>
    </Switch>
  </BrowserRouter>
);


export default BasicRoute;