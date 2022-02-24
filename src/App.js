import React from 'react'
import authContext from './store'

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Signup from './Components/Signup/signup'
import Login from './Components/Login/Login' 

import AddProject from './Components/AddProject/AddProject'
import Project from './Components/Project/Project'
import ProjectsList from './Components/ProjectsList/ProjectsList'

import Navbar from './Components/Navbar/navbar'
import Homepage from './Pages/Homepage/homepage' 
import About from './Pages/About/about' 
import Gallery from './Pages/Gallery/gallery' 
import BookingProcess from './Pages/BookingProcess/bookingProcess' 
import Ecosystem from './Pages/Ecosystem/ecosystem' 
import Contact from './Pages/Contact/contact'
import './App.css'

const PrivateRoute =({component: Component, ...rest}) => {
  const store = React.useContext(authContext);
  return (
    <Route {...rest} render={(props) => (
      store.isAuth
      ? <Component {...props} />
      : <Redirect to='/' />
    )} />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />


      <Switch>
        <div className="app_container">

        < Route exact path="/"><Homepage/></Route> 
        < Route exact path="/about"><About/></Route> 
        < Route exact path="/gallery"><Gallery/></Route> 
        < Route exact path="/booking"><BookingProcess/></Route> 
        < Route exact path="/ecosystem"><Ecosystem/></Route> 
        < Route exact path="/contact"><Contact/></Route> 
        < Route exact path="/login" render={(props) => (< Login {...props} />)}></Route> 
        < Route exact path="/signup" render={(props) => (< Signup {...props} />)}></Route>

        < PrivateRoute path="/projects" component={ ProjectsList}></PrivateRoute>
        < PrivateRoute path="/add" component={ AddProject}></PrivateRoute>
        < PrivateRoute path="/projects/:id_project" component={ Project}></PrivateRoute>
        
        </div>
      </Switch>

    </BrowserRouter>
      
  );
}

export default App;
