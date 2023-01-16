import React, { FormEvent, useRef } from 'react'

import logo from "@/logos/logo_yard_sale.svg"
import "../styles/Login.css"

const Login = () => {
    const form = useRef<HTMLFormElement>(null)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        if(form.current) {
            const formData = new FormData(form.current)
            const data = {
                user: formData.get("email"),
                password: formData.get("password")
            }
            console.log(data)
        }
    }

    return (
        <div className="login">
            <div className="form-container">
                <img src={logo} alt="logo" className="logo" />

                <form action="/" className="form" ref={form}>
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="text" name="email" placeholder="platzi@example.cm" className="input input-email" />

                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" name="password" placeholder="*********" className="input input-password" />
                    
                    <button className='primary-button login-button' onClick={handleSubmit}>Log in</button>
                    <a href="/">Forgot my password</a>
                </form>

                <button className="secondary-button signup-button">Sign up</button>
            </div>
        </div>
    )
}

export { Login }