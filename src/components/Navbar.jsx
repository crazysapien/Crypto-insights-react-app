import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar ({toggleTheme}) {

    const [toggle , settoggle ] = useState(false);

    const togglemode =()=> {
        settoggle(!toggle);
        toggleTheme();
    }

    return (
        <>
        <nav className={`w-full h-16 bg-white text-black shadow-md flex items-center justify-between px-12 shadow-gray`}>
            <Link to={'/'} className={`text-3xl font-mono`}>Crypto-Insights</Link>
            <div className='flex gap-8 text-xl'>
                <Link to="/">HOME</Link>
                <Link to="/cryptocurrencies">CRYPTO CURRENCIES</Link>
                <Link to="/news">NEWS</Link>
            </div>
            <div onClick={togglemode} className={`w-12 h-6 bg-gray rounded-3xl flex items-center p-1`}>
            <div className={`rounded-full h-4 bg-white w-4 ${!toggle?'translate-x-0':'translate-x-6'}`}>
            </div>
            </div>
        </nav>
        </>
    );
}

export default Navbar ; 