import React, { useEffect, useState } from 'react';
import CryptoCard from './CoinCard';
import {useGetCryptosQuery} from '../services/cryptoApi';
import Loading from './Loading';

function CryptoCurrencies({simplified}) {

    // count set to 10 for showing on homepage
    const count = simplified? 10 : 100;
    const {data:cryptoslist , isFetching} = useGetCryptosQuery(count);

    //the coin data fetched is set as stored in crypto
    const [crypto, setcrypto] = useState();

    // for getting search term to implement search functionality 
    const [searchterm, setsearchterm] = useState('');

    
    useEffect(() => {
        setcrypto(cryptoslist?.data?.coins);
        const filteredData = cryptoslist?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchterm));
        setcrypto(filteredData);
    }, [cryptoslist,searchterm]);
    
    if(isFetching){
        return <Loading/>;
    }
    return (
        <>
        {!simplified && (<div className={`p-8 w-full text-center`}>
        <input type="text" className='w-96 h-8 px-8 shadow-gray shadow-md' placeholder='search' onChange={(e) => setsearchterm(e.target.value.toLowerCase())} />
        </div>)}
        <div className={`flex flex-wrap p-8 gap-4 justify-center`}>
        {crypto?.map((coin) => {
            return <CryptoCard key={coin.uuid} uuid={coin.uuid} rank={coin.rank} image={coin.iconUrl} name={coin.name} symbol={coin.symbol}
            price={coin.price} change={coin.change} marketCap={coin.marketCap} _24hVolume={coin['24hVolume']} />
        })}
        </div>
        </>
    );
}

export default CryptoCurrencies;