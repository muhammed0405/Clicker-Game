import React, {useEffect} from 'react';

import './App.scss';
import { useSelector } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Boost from './components/Boost';
import Header from './components/Header';
import InfoAndSkins from './components/InfoAndSkins';


function App() {
    
    
   

    const darkMode = useSelector(state=> state.darkMode)
    
    // Apply background color based on dark mode
    const body = () => {
        document.body.style.background = darkMode ? '#222' : 'white';
        document.body.style.transition = '1s';
    }

    // Call body function once the component mounts
    useEffect(() => {
        body();
    }, [darkMode]);


    return (
        <div className="App">
          <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/boost' element={<Boost />} />
                <Route path='/skins' element={<InfoAndSkins/>}/>
            </Routes>
        </div>
    );
}

export default App;
