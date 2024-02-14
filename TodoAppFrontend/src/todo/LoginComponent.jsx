import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./security/AuthContext"

export default function LoginComponent() {

    const[username, setUsername] = useState('milind2003')
    const[password, setPassword] = useState('')
    const[error, showError] = useState(false)
    const navigate = useNavigate()

    const AuthContext = useAuth()
    
    async function checkLogin() {
        if(await AuthContext.login(username, password)) {
            navigate(`/welcome/${username}`) 
        } else {
            showError(true);
        }
    }

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    

    return (
        <div className="LoginComponent">
            <h1>Please Login</h1>
            {error && <div className="errorMessage">Error: Invalid credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name = "username" value={username} onChange={handleUsernameChange}/>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name = "password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={checkLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}


