import React, { useState } from "react";

import styled from "styled-components";

const Background = styled.div`
    width: 480px;
    height: 550px;
    position: absolute;
    transform: translate(-50%,-50%);
    left: 50%;
    top: 50%;
`;

const Shape = styled.div`
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
    background: ${props => props.firstchild ? "linear-gradient(#1845ad,#23a2f6)" : "linear-gradient(to right,#ff512f,#f09819)"};
    left: ${props => props.firstchild ? "-80px" : ""};
    top: ${props => props.firstchild ? "-80px" : ""};
    right: ${props => props.lastchild ? "-30px" : ""};
    bottom: ${props => props.lastchild ? "-80px" : ""};
`;

const Form = styled.form `
    height: 550px;
    width: 450px;
    background-color: rgba(255,255,255,0.13);
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(3px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
`

const FormProperties = styled.div `
    font-family: 'Poppins',sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
`;

const Heading = styled.h3 `
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
`

const Label = styled.label `
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
`
const Input = styled.input `
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255,255,255,0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
    border:none;
    color: white;
    ::placeholder {
        color: grey;
    }
`

const Button = styled.button `
    margin-top: ${props => props.firstchild ? "40px" : "8px"};
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
    border: none;
    :hover {
        background-color: #e6e6e6;
    }
`

const Text = styled.h6 `
    margin-top: 10px;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
`

function Login(props) {

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitHandler = () => {};

    return (
        <>
            <Background>
                <Shape firstchild></Shape>
                <Shape lastchild></Shape>
            </Background>
            <Form>
                <FormProperties>
                    <Heading>Login Here</Heading>
                    
                    <Label>Username:</Label>
                    <Input type='text' placeholder="Email" onChange={(e) => setUsername(e.target.value)}/>

                    <Label>Password:</Label>
                    <Input type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>

                    <Button firstchild onClick={submitHandler}>Login</Button>
                    <Text>Or</Text>
                    <Button lastchild onClick={() => props.onFormSwitch('signup')}>Don't have an account? Sign up here!</Button>
                </FormProperties>
            </Form>
        </>
        
    )
}

export default Login;
