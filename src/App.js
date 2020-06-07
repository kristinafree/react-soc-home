import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter,Route, withRouter, Switch, Redirect} from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import {initializeApp} from './redux/app-reducer.js'
import Preloader from './components/common/Preloader/Preloader';
import News from './components/News';
import Music from './components/Music/Music';
import Settings from './components/Settings';
import {withSuspense} from './hoc/withSuspense';
import store from './redux/redux-store'

//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends Component {
       catchAllUnhandleErrors = (reason, promise) => {
              // alert("Error")
       }
       componentDidMount() {
              this.props.initializeApp();
              window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
       }

       componentWillMount() {
              window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors);
       }

       render() {
              if (!this.props.initialized) {
                 return <Preloader />
              }
              
              return (
                     <div className = 'app-wrapper'>
                            <HeaderContainer />
                            <Navbar />
                            <div className = 'app-wrapper-content'>
                                   <Switch>
                                     <Route exact path = '/' 
                                                 render = { () => <Redirect to = {"/profile"} /> }/>
                                     <Route path ='/dialogs' 
                                                 render = {withSuspense(DialogsContainer)} />
                                      <Route path = '/profile/:userId?' 
                                                 render = {withSuspense(ProfileContainer)} />
                                      <Route path = '/users' 
                                                 render = { () => <UsersContainer /> }/>
                                      <Route path = '/login' 
                                                 render = { () => <LoginPage /> }/>
                                      <Route path = '/news' 
                                                 render = { () => <News /> }/>
                                      <Route path = '/music' 
                                                 render = { () => <Music /> }/>
                                      <Route path = '/setting' 
                                                 render = { () => <Settings /> }/>
                                      <Route path = '*' 
                                                 render = { () => <div>404 NOT FOUND</div> }/>
                                   </Switch>
                            </div>
                     </div>
              )
       }
}

const mapStateToProps = (state) => ({
       initialized: state.app.initialized
})

let AppContainer = compose(
       withRouter, 
       connect(mapStateToProps, {initializeApp})) (App);

const BaseJSApp = (props) => {
       return <HashRouter>
           <Provider store = {store}>
              <AppContainer />
           </Provider>
       </HashRouter>
}

export default BaseJSApp;
