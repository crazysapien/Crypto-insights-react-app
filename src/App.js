import React,{useState} from 'react';
import {Routes , Route } from 'react-router-dom';

// importing all components
import CryptoCurrencies from './components/CryptoCurrencies';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import CoinDetails from './components/CoinDetails';
import ThemeContext,{themes} from './context/ThemeContext';
import News from './components/News';


function App() {
    
    // setting the theme data provided by the themesContext as the theme state 
    const [theme, settheme] = useState(themes);

    // function for toggling theme (DARK MODE AND LIGHT MODE ) 
    const toggleTheme = () => {
    theme===themes.light ? settheme(themes.dark) : settheme(themes.light);
    }

    return (
        <ThemeContext.Provider value={theme}>
        
        <Navbar toggleTheme={toggleTheme} />

        <div className={`min-h-screen `}>
        <Routes>
            <Route exact path='/' element={<Homepage/>} />
            <Route exact path='/cryptocurrencies' element={<CryptoCurrencies/>} />
            <Route exact path='/coin/:coinId' element={<CoinDetails/>} />
            <Route exact path='/news' element={<News/>} />
        </Routes> 
        </div>

        <Footer/>  
           
        </ThemeContext.Provider>
    );
}

export default App;