import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div className='auth-page'>
            <div className='container page'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 col-xs-12'>
                        <h1 className='text-xs-center'>Sign In</h1>
                        <p className='text-xs-center'>
                            <Link to='/register'>
                                Need an account?
                            </Link>
                        </p>

                        <form>
                            <fieldset>

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
                                    Sign in
                                </button>

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Login)