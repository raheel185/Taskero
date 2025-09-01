import React from 'react'
import { useState } from 'react'

const Login = () => {

  const [email, setEmail] = useState('')


  async function handleLogin(e){

    e.preventDefault()

    console.log(email)
  }

  return (
    <div>
      <h1>User Login</h1>

      <form onSubmit={handleLogin}>
          <input onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder='Enter your email'/>
          <input type="password"  placeholder='***********'/>
          <input type="submit" value="Login"/>
      </form>

    </div>
  )
}

export default Login
