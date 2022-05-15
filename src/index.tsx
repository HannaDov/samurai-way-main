import store from './redux/state';
import React from "react";
import {renderTree} from './render'
// @ts-ignore
/*import * as serviceWorker from './serviceWorker';*/

store.subscribe(renderTree);
renderTree();

/*
 If you want your app to work offline and load faster, you can change
 unregister() to register() below. Note this comes with some pitfalls.
 Learn more about service workers: https://bit.ly/CRA-PWA*/

/*serviceWorker.unregister();*/
