import React from 'react';
import preloader from "../../image/loading-3.gif";

export const Preloader = () => {
    return (
        <div /*style={{backgroundColor:'darkseagreen'}}*/>
            <img src={preloader}/>
        </div>
    );
};

