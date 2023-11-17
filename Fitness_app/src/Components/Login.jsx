import React, { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <>
        <div>
            <h2>User's Login</h2>
            <input placeholder="Enter Email" value={email} type="text"/>
            <input placeholder="Enter Password" value={password} type="text"/>
        </div>
        </>
    )
}