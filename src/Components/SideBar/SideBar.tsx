import React from 'react';

import {SidebarType} from "../../redux/state";

type SideBarType={
    state: SidebarType
}

export const SideBar:React.FC<SideBarType> =(props) => {

    return (
        <div>
            <h3>Friends</h3>
           </div>
)
}