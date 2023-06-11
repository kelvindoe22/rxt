import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Dashboard from './pages/Dashboard.js';
import StudentInfoEntry from './pages/sie.js'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/dashboard" element = {<Dashboard />} />
        <Route path="/studentinfoentry" element = {<StudentInfoEntry /> } />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)