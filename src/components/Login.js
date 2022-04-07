import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ListErrors from './ListErrors'
import {
    UPDATE_FIELD_AUTH,
    LOGIN,
    LOGIN_PAGE_UNLOADED
} from '../constants/actionTypes'
import agent from '../agent'
import { useDispatch, useSelector } from 'react-redux'
import { authSelector } from '../selectors/selectors'

const Login = () => {
    const auth = useSelector(authSelector)
    const dispatch = useDispatch()

    const onChangeEmail = (e) => {
        dispatch({
            type: UPDATE_FIELD_AUTH,
            key: "email",
            value: e.target.value
        })
    }

    const onChangePassword = (e) => {
        dispatch({
            type: UPDATE_FIELD_AUTH,
            key: "password",
            value: e.target.value
        })
    }

    const onSubmit = (email, password) => e => {
        e.preventDefault()
        dispatch({
            type: LOGIN,
            payload: agent.Auth.login(email, password)
        })
    }

    useEffect(() => {
        return () => {
            dispatch({
                type: LOGIN_PAGE_UNLOADED
            })
        }
    }, [])

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

                        <ListErrors errors={auth.errors} />

                        <form onSubmit={onSubmit(auth.email, auth.password)}>
                            <fieldset>

                                <fieldset className='form-group'>
                                    <input 
                                        className='form-control form-control-lg' 
                                        type='email'
                                        autoComplete='username' 
                                        placeholder='Email' 
                                        value={auth.email || ''}
                                        onChange={onChangeEmail} />
                                </fieldset>

                                <fieldset className='form-group'>
                                    <input 
                                        className='form-control form-control-lg' 
                                        type='password' 
                                        placeholder='Password' 
                                        value={auth.password || ''}
                                        onChange={onChangePassword} />
                                </fieldset>

                                <button className='btn btn-lg btn-primary pull-xs-right' type='submit' disabled={auth.inProgress}>
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