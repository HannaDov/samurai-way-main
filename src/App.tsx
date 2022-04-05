import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {Music} from "./Components/Music/Music";
import {News} from "./Components/News/News";
import {Setting} from "./Components/Setting/Setting";


const App = () => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">

                        <Route path='/dialogs' component={Dialogs}/>


                        <Route path='/profile' component={Profile}/>


                        <Route path='/news' component={News}/>


                        <Route path='/music' component={Music}/>


                        <Route path='/setting' component={Setting}/>


                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
