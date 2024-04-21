import {useState} from 'react'
import Dec from './icons/image/decoration.png'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import Footer from "./components/Footer.jsx";

function App() {

    return (
        <div className={''}>

        <div className=''>
            <HomePage/>
            <Footer/>
        </div>
        </div>
    )
}

export default App
