import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import { lazy, Suspense } from 'react';
import { store } from './store';
import { push } from 'connected-react-router';
import { APP_LOAD, REDIRECT } from './constants/actionTypes';
import { useDispatch, useSelector } from 'react-redux';
import { appSelector } from './selectors/selectors';
import { useEffect } from 'react';
import agent from './agent';

const Login = lazy( () => import('./components/Login'))
const Register = lazy(() => import('./components/Register'))
const Article = lazy( () => import('./components/Articles'))

function App() {
  const app = useSelector(appSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    const token = window.localStorage.getItem('jwt')
    if (token) {
      agent.setToken(token)
    }

    dispatch({
      type: APP_LOAD,
      payload: token ? agent.Auth.current() : null,
      token,
      skipTracking: true
    })
  }, [])

  useEffect(() => {
    store.dispatch(push(app.redirectTo))
    dispatch({
      type: REDIRECT
    })
  }, [app.redirectTo])

  if (app.appLoaded) {
    return (
      <BrowserRouter>
        <Header appName={app.appName} currentUser={app.currentUser} />
        {/* Neu muon su dung Lazy import thi can suspense */}
        <Suspense fallback="Loading . . ."> 
          <Routes>
            <Route exact path="/" element={<Home currentUser={app.currentUser}/>}/>
            <Route exact path="/register" element={<Register />}/>
            <Route exact path="/login" element={<Login />}/>
            <Route exact path="/article/:id" element={<Article />}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
  }
  return (
    <BrowserRouter>
      <Header appName={app.appName} currentUser={app.currentUser} />
    </BrowserRouter>
  )
  
}

export default App;
