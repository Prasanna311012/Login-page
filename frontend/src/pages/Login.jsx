import React, { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
const Login = () => {

  const navigate = useNavigate()

  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")


  function check() {
    axios.post(`http://localhost:3000/login`, { username: user, password: pass })
      .then(res => {
        if (res.data.success) {
          navigate("/success")
        }
        else {
          navigate("/fail")
        }
      }).catch(() => {
        navigate("/fail");
      })
  }
  return (
    <div className="flex flex-col justify-center items-center mx-auto w-fit p-5 mt-40 shadow-2xl rounded-lg bg-white">
      <h1 className="text-2xl font-bold mb-4">Welcome!!!</h1>
      <input
        placeholder="Username"
        className="px-2 py-1 border border-black rounded mb-2"
        name="username"
        onChange={e => setUser(e.target.value)}
      ></input>
      <input
        placeholder="Password"
        className="px-2 py-1 border border-black rounded mb-2"
        name="password"
        onChange={e => setPass(e.target.value)}
      ></input>
      <button className="bg-blue-500 hover:bg-blue-600 transition text-white px-2 py-1 rounded w-20 mb-4" onClick={check}>Login</button>
      <p>Don't Have an Account? <Link to={"/SignUp"} className="underline text-blue-500">SignUp</Link></p>
    </div>
  )
}
export default Login;