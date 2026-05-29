import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import AuthContext from './components/context/Authcontext.jsx'
import App from './App.jsx'
import "./main.css"


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AuthContext >
    <App />
    </AuthContext>
    </BrowserRouter>
)
