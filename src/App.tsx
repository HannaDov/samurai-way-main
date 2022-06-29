import React, {ReactNode} from 'react';
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
import {Users} from "./Components/Users/Users";


const App = () => {

    return (


        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <Dialogs/>}/>
                <Route path='/profile' render={() => <Profile/>}
                />
                <Route path='/users' render={() => <Users/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/setting' render={() => <Setting/>}/>
                <Route path='/friends' render={() => <SideBar/>}/>
            </div>

        </div>

    )
}

export default App;
