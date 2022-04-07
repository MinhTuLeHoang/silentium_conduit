import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import agent from '../agent'
import { useSelector, useDispatch } from 'react-redux'
import { authSelector } from '../selectors/selectors'
import {
    UPDATE_FIELD_AUTH,
    REGISTER,
    REGISTER_PAGE_UNLOADED
} from '../constants/actionTypes'
import ListErrors from './ListErrors'

const Register = () => {
    const dispatch = useDispatch()
    const auth = useSelector(authSelector)

    const onChangeEmail = (e) => {
        dispatch({
            type: UPDATE_FIELD_AUTH,
            key: 'email',
            value: e.target.value
        })
    }

    const onChangeUsername = (e) => {
        dispatch({
            type: UPDATE_FIELD_AUTH,
            key: 'username',
            value: e.target.value
        })
    }

    const onChangePassword = (e) => {
        dispatch({
            type: UPDATE_FIELD_AUTH,
            key: 'password',
            value: e.target.value
        })
    }

    const onSubmit = (username, email, password) => e => {
        e.preventDefault()
        const payload = agent.Auth.register(username, email, password)
        dispatch({
            type: REGISTER,
            payload
        })
    }

    useEffect(() => {
        return () => dispatch({
            type: REGISTER_PAGE_UNLOADED
        })
    }, [])

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

                        <ListErrors errors={auth.errors} />

                        <form onSubmit={onSubmit(auth.username, auth.email, auth.password)}>
                            <fieldset>
                                <fieldset className='form-group'>
                                    <input 
                                        className='form-control form-control-lg' 
                                        type='text' 
                                        placeholder='Username' 
                                        value={auth.username || ''}
                                        onChange={onChangeUsername} />
                                </fieldset>

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