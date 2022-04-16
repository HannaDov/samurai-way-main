import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Setting} from "./Components/Setting/Setting";
import {RootStateType} from "./redux/state";
import {SideBar} from "./Components/SideBar/SideBar";

export type AppStateType = {
    appState: RootStateType
}

const App: React.FC<AppStateType> = (props) => {

    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">

                <Route path='/dialogs'
                       render={() => <Dialogs state={props.appState.dialogPage}/>}/>


                <Route path='/profile' render={() => <Profile state={props.appState.profilePage}/>}/>


                <Route path='/news' render={() => <News/>}/>


                <Route path='/music' render={() => <Music/>}/>


                <Route path='/setting' render={() => <Setting/>}/>
                <Route path='/friends' render={() => <SideBar/>}/>


            </div>

        </div>

    )
}

export default App;
