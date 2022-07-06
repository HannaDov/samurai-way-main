import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Setting} from "./Components/Setting/Setting";
import {SideBar} from "./Components/SideBar/SideBar";
import {Route} from "react-router-dom";
import {UsersContainer} from "./Components/Users/UsersContainer";
import {Users1} from "./Components/Users/Users1";


const App = () => {

    return (


        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs/>}/>
                <Route path='/profile' render={() => <Profile/>}
                />
                <Route path='/users' render={() => <UsersContainer/>}/>
                {/*<Route path='/user' render={() => <Users1/>}/>*/}
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
                <Route path='/friends' render={() => <SideBar/>}/>
            </div>

        </div>

    )
}

export default App;
