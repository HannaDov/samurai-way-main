import React from 'react';

import {SidebarType} from "../../redux/store";
import {ReduxStoreType} from "../../redux/redux-store";

type SideBarType={
    store: ReduxStoreType
}

export const SideBar:React.FC<SideBarType> =(props) => {

    return (
        <div>
            <h3>Friends</h3>
           </div>
)
}