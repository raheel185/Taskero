import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  async function handleLogin(e){

    e.preventDefault()

    console.log(password)
  }

  return (
    <div>
      <h1>User Login</h1>

      <form onSubmit={handleLogin}>
          <input onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder='Enter your email'/>
          <input onChange={(e) => setPassword(e.target.value)} type="password"  placeholder='***********'/>
          <input type="submit" value="Login"/>
      </form>

    </div>
  )
}

export default Login
