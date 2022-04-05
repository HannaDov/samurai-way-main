import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {NavBar} from "./Components/NavBar/NavBar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
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
                    <Routes>
                        <Route path='/dialogs' element={<Dialogs/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/profile' element={<Profile/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/news' element={<News/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/music' element={<Music/>}/>
                    </Routes>
                    <Routes>
                        <Route path='/setting' element={<Setting/>}/>
                    </Routes>

                </div>

            </div>
        </BrowserRouter>
    )
}

export default App;
