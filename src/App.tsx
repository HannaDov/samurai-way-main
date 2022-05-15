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
import store, {RootStateType, StoreType, ActionTypes} from "./redux/state";
import {SideBar} from "./Components/SideBar/SideBar";


export type AppStateType = {
    appState: RootStateType
    addNewPost: (postText: string) => void
    updateNewPostText:(newText:string)=> void
    store:StoreType
    dispatch:(action:ActionTypes)=>void
    addNewMessage:(messageText: string)=>void
    updateNewMessageText:(newMessage: string)=>void

}

const App: React.FC<AppStateType> = (props) => {



    return (

        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className="app-wrapper-content">

                <Route path='/dialogs'
                       render={() => <Dialogs store={store}
                                              dialogPage={props.appState.dialogPage}
                                              addNewMessage={props.store.addNewMessage.bind(props.store)}
                                              updateNewMessageText={props.store.updateNewMessageText.bind(props.store)}
                                              dispatch= {props.store.dispatch.bind(props.store)}
                       />}
                />


                <Route path='/profile' render={() => <Profile store={store} profilePage={props.appState.profilePage}
                                                              addNewPost={props.store.addNewPost.bind(props.store)}
                                                              updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                                                              dispatch= {props.store.dispatch.bind(props.store)}
                                                              />}
                />


                <Route path='/news' render={() => <News/>}/>


                <Route path='/music' render={() => <Music/>}/>


                <Route path='/setting' render={() => <Setting/>}/>
                <Route path='/friends' render={() => <SideBar state={props.appState.sidebar}/>}/>


            </div>

        </div>

    )
}

export default App;
