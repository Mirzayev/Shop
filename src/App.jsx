import {useState} from 'react'
import Dec from './icons/image/decoration.png'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import Footer from "./components/Footer.jsx";

function App() {

    return (
        <div className={''}>

        <div className='bg-[#FBF8EC] '>
            <div className='max-w-[1440px] m-auto'>
            <HomePage/>
            <Footer/>

            </div>
        </div>
        </div>
    )
}

export default App
