import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FirebaseContext from './Context/Firebase';
import {Firebase, FieldValue} from './lib/Firebase'

ReactDOM.render(
    <FirebaseContext.Provider value={{Firebase,FieldValue}}>
    <App/>
    </FirebaseContext.Provider>
    , document.getElementById("root"));
