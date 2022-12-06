import React, {useState} from "react";
import Login from "./Login";
import Signup from "./Signup";

function Authentication() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    return (
        <>
        {
            currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Signup onFormSwitch={toggleForm}/>
        }
        </>
    )
}

export default Authentication;