import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';
import { useDataProvider } from '../../context/ApiContext';


const Login = () => {
    const { getUserRole, client } = useDataProvider();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const submit = () => {
        client!.post('/user', {
            username: username,
            password: password
        }).then((response)=>{
            getUserRole(response.data[0].role)
        })
    }

    return (
        <div className="login__container">
            <div className="login__content">
                <div id="login">
                    <form>
                        <div className='login__username'>
                            <label htmlFor="user">Username</label>
                            <input type="email" className="form-control"
                                 id="user" placeholder="username"
                                 onChange={(e)=>{setUsername(e.target.value)}}/>
                        </div>
                        <div className='login__password'>
                            <label htmlFor="passwd">Mot de passe</label>
                            <input type="password" className="form-control " 
                                    id="passwd" placeholder="mot de passe"
                                    onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                      <button type="submit" className="btn btn-primary login__submit" 
                            onClick={(e)=>{e.preventDefault(); submit(); navigate("/landing")}}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
