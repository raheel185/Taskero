import React from 'react'

const Login = () => {
  return (
    <div>
      <h1>User Login</h1>

      <form>
          <input type="email"  placeholder='Enter your email'/>
          <input type="password"  placeholder='***********'/>
          <input type="submit" value="Login"/>
      </form>

    </div>
  )
}

export default Login
