import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useDataProvider } from '../../context/ApiContext';

interface Props {}

function Login(props: Props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    return (
        <div className="login__container">
            <div className="login__content">
                <div id="login">
                    <form>
                        <div className='login__username'>
                            <label htmlFor="user">Username</label>
                            <input type="email" className="form-control" id="user" placeholder="username"/>
                        </div>
                        <div className='login__password'>
                            <label htmlFor="passwd">Mot de passe</label>
                            <input type="password" className="form-control " id="passwd" placeholder="mot de passe"/>
                        </div>
                      <button type="submit" className="btn btn-primary login__submit" 
                            onClick={(e)=>{e.preventDefault(); navigate("/landing")}}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
