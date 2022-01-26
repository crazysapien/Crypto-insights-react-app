import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";


function CryptoCard({rank , image , name , uuid, price , change , marketCap , _24hVolume}) {

    return (
        <>
        {/* Linking to coin details page */}
        <Link to={`/coin/${uuid}`} className={`w-72 p-2 h-64 flex flex-col justify-around gap-4 shadow-md shadow-gray`}>
        
        <div className={`text-xl flex items-center justify-between gap-2`}>
        <div className={`text-gray`}>{`#${rank}`}</div>
        {name} 
        <img src={image} alt="" className="w-12 h-12" />
        </div>

        <div className={`flex items-center justify-around`}>
        <div className={`text-xl text-gray`}>Price</div>
        <div className={`text-xl`}>{`$${Number(price).toFixed(5)}`}</div>
        <div className={`mx-2 ${change>=0?'text-[#28B463]':'text-[#E74C3C]'}`}>
        {`${change>=0?'+':''}${change}%`}</div>
        </div>

        <div className={`flex items-center justify-around`}>
        <div>
            <div className={`text-gray`}>Market cap</div>
            <div>{millify(Number(marketCap))}</div>
        </div>
        <div>
            <div className={`text-gray`}>24h volume</div>
            <div>{millify(Number(_24hVolume))}</div>
        </div>
        </div>
        </Link>
        </>
    );
}

export default CryptoCard;