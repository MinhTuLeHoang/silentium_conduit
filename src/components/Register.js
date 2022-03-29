import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className='auth-page'>
            <div className='container page'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 col-xs-12'>
                        <h1 className='text-xs-center'>Sign Up</h1>
                        <p className='text-xs-center'>
                            <Link to='/login'>
                                Have an account?
                            </Link>
                        </p>

                        <form>
                            <fieldset>
                                <fieldset className='form-group'>
                                    <input 
                                        className='form-control form-control-lg' 
                                        type='text' 
                                        placeholder='Username' 
                                        value={username}
                                        onChange={handleUsernameChange} />
                                </fieldset>

                                <fieldset className='form-group'>
                                    <input 
                                        className='form-control form-control-lg' 
                                        type='email'
                                        autoComplete='username' 
                                        placeholder='Email' 
                                        value={email}
                                        onChange={handleEmailChange} />
                                </fieldset>

                                <fieldset className='form-group'>
                                    <input 
                                        className='form-control form-control-lg' 
                                        type='password' 
                                        placeholder='Password' 
                                        value={password}
                                        onChange={handlePasswordChange} />
                                </fieldset>

                                <button className='btn btn-lg btn-primary pull-xs-right' type='submit'>
                                    Sign up
                                </button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Register)