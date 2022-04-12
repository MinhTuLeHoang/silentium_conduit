import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
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
import Profile from './components/Profile';

const Login = lazy( () => import('./components/Login'))
const Register = lazy(() => import('./components/Register'))
const Article = lazy( () => import('./components/Articles'))

const Testing = lazy( () => import("./components/Testing/index"))

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
            <Route exact path="/article/:id" element={<Article />}/>
            <Route exact path="/testing" element={<Testing />} />
            <Route exact path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/@:username" element={<Profile />}/>
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
