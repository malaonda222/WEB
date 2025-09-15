import React, {useState} from 'react'

const LoginForm = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[messaggio,setMessaggio] = useState("")

    const gestioneDati=(evento)=>{
        console.log(evento)
        evento.preventDefault();

        setMessaggio("Le credenziali sono "+email+ "password "+password)
    }
    return (<div>
        <form>
            <h2>Login</h2>
                {messaggio}
            <div>
                <label>Email</label>
                <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <button className='btn btn-dark' onClick={gestioneDati}>Login</button>
        </form>
    </div>)
}

export default LoginForm


// evento viene scatenato dall'input
// sull'evento viene scatenato l'evento stesso che si porta dietro chi l'ha scatenato

// 