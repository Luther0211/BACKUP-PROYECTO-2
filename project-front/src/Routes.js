import React from 'react'
import {Switch, Route} from 'react-router-dom'
import SignupContainer from './components/auth/signup/signupContainer';
import LoginContainer from './components/auth/login/loginContainer';
import Profile from './components/auth/profile';
//import Index from './components/index'
import newPost from './components/newPost/newPostContainer'
import Posts from './components/Posts/PostsContainer'
//import App from './App';
//import {Link} from 'react-router-dom'
import Video from './components/video';
import Contact from './components/Contact';


const Routes = () => {

    return(
        <Switch>
            <Route exact path="/" component={Video}/>
            <Route path="/signup" component={SignupContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/profile" component={Profile} />
            <Route path="/new_post" component={newPost} />
            <Route path="/posts" component={Posts} />
            <Route path="/contact" component={Contact} />
        </Switch>
    )
}

export default Routes