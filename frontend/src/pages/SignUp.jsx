import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

const SignUp = () => {

    const navigate = useNavigate()

    const [uname, setUname] = useState("")
    const [upass, setUpass] = useState("")
    const [confirm, setConfirm] = useState("")

    function signup() {
        if (!uname || !upass || !confirm) {
            alert("Please fill all fields!");
            return;
        }

        if (upass.length < 6) {
            alert("Password must be at least 6 characters long!");
            return;
        }

        if (upass !== confirm) {
            alert("Passwords do not match!");
            return;
        }

        axios.post("https://login-page-1-8s3q.onrender.com/signup", {
            username: uname,
            password: upass,
        }).then(res => {
            if (res.data.success) {
                alert("Signup successful! Please login.");
                navigate("/");
            }
        }).catch(err => {
            const message = err.response?.data?.message || err.message || "Unknown error";
            alert("Signup failed: " + message);
        });

    }

    return (
        <div className="flex flex-col justify-center items-center mx-auto w-80 p-5 mt-40 shadow-2xl rounded-lg bg-white">
            <h1 className="text-2xl font-bold mb-4">Create Account</h1>
            <input
                onChange={e => setUname(e.target.value)}
                placeholder="Username"
                className="px-2 py-1 border border-black rounded mb-2"
                name="username"
            ></input>
            <input
                onChange={e => setUpass(e.target.value)}
                placeholder="Password"
                className="px-2 py-1 border border-black rounded mb-2"
                name="password"
            ></input>
            <input
                onChange={e => setConfirm(e.target.value)}
                placeholder="ConfirmPassword"
                className="px-2 py-1 border border-black rounded mb-2"
                name="confirmpassword"
            ></input>
            <button onClick={signup} className="bg-blue-500 hover:bg-blue-600 transition text-white px-2 py-1 rounded w-20 mb-4">Signup</button>
            <p>Already have an account? <Link to={"/"} className="underline text-blue-500">Login</Link></p>
        </div>
    )
}
export default SignUp;