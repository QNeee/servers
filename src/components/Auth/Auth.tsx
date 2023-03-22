import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { login, register } from "../../Redux/authOperations";
import { AppDispatch } from "../../Redux/store";
import { FormContainer } from "./Auth.styled";



export const Auth: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
interface FormState {
  email: string;
  password: string;
}
    const { pathname } = useLocation();
    const [form, setForm] = useState<FormState>({
        email:'',password:''
    });
          const inputHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value,

        }));
    }
    
    const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (pathname === '/register') {
            const newUser:FormState = {
                email: form.email,
                password:form.password
            }
          return  dispatch(register(newUser));
        }
        const loginUser = {
            email: form.email,
            password:form.password
        }
          return  dispatch(login(loginUser));
    }
    return <FormContainer onSubmit={onSubmit}>
        <label>Email
        <input type="text" name='email' value={form.email} onChange={inputHandler} autoComplete='off' /></label>
        <label>Password<input type="password" name="password" value={form.password} onChange={inputHandler} autoComplete='off'/></label>
        <button type="submit">{pathname==='/register'?'Register':"Login"}</button>
        </FormContainer>
}