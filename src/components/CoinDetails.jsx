import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import { useGetCoinDetailsQuery,useGetCryptoHistoryQuery } from '../services/cryptoApi';
import millify from 'millify';
import parse from 'html-react-parser';
import Chart from './Chart';
import Loading from './Loading'

function CryptoDetails() {

    // extracting coin id from the url params 
    const { coinId } = useParams();

    const { data, isFetching } = useGetCoinDetailsQuery(coinId);


    
    // timeperiods provided by coinranking api for fetching historical data 
    const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
    
    const [timePeriod, setTimeperiod] = useState('24h');

    const { data: coinHistory , isLoading } = useGetCryptoHistoryQuery({ coinId:coinId,timePeriod:timePeriod});


    if(isFetching || isLoading){
        return <Loading/>;
    }

    const cryptoDetails = data?.data?.coin ;
    const links = cryptoDetails?.links ;

    return (
        <>
            <div className={`w-full m-auto p-8`}>

                <div className={`flex items-center gap-8`}>
                    <div className={`text-5xl text-black my-8`}>{`${cryptoDetails?.name} (${cryptoDetails?.symbol})`}
                    </div>
                    <div className={`text-3xl text-gray`}>Price: ${Number(cryptoDetails?.price).toFixed(5)}</div>
                    <div className={`mx-2 text-xl ${cryptoDetails?.change>=0?'text-[#28B463]':'text-[#E74C3C]'}`}>
        {`${cryptoDetails?.change>=0?'+':''}${cryptoDetails?.change}%`}</div>
                </div>

                {/* dropdown menu for selecting timeframe  */}
                <select name="time" id="time" onChange={(e) => setTimeperiod(e.target.value)}>
                {time.map((period,index) => {
                    return (
                        <option key={index} value={period}>{period}</option>
                    );
                })}
                </select>

                {/* crypto chart  */}
                <div>
                <Chart coinHistory={coinHistory}/>
                </div>

                
                <div className={`flex flex-wrap my-8 justify-around`}>

                    <div className={`flex flex-col p-4 shadow-md shadow-gray`}>
                        <div className={`w-80 flex justify-between items-center border-b-[1px] py-4 border-gray`}>
                            <div className={`text-gray`}>Total supply</div>
                            <div className={`text-black`}>{cryptoDetails?.supply.total}</div>
                        </div>
                        <div className={`w-80 flex justify-between items-center border-b-[1px] py-4 border-gray`}>
                            <div className={`text-gray`}>Circulating supply</div>
                            <div className={`text-black`}>{cryptoDetails?.supply.circulating}</div>
                        </div>
                        <div className={`w-80 flex justify-between items-center border-b-[1px] py-4 border-gray`}>
                            <div className={`text-gray`}>Total markets</div>
                            <div className={`text-black`}>{cryptoDetails?.numberOfMarkets}</div>
                        </div>
                        <div className={`w-80 flex justify-between items-center border-b-[1px] py-4 border-gray`}>
                            <div className={`text-gray`}>Total exchanges</div>
                            <div className={`text-black`}>{millify(Number(cryptoDetails?.numberOfExchanges))}</div>
                        </div>
                        <div className={`w-80 flex justify-between items-center border-b-[1px] py-4 border-gray`}>
                            <div className={`text-gray`}>Market Cap</div>
                            <div className={`text-black`}>{`$${millify(Number(cryptoDetails?.marketCap))}`}</div>
                        </div>
                        <div className={`w-80 flex justify-between items-center border-b-[1px] py-4 border-gray`}>
                            <div className={`text-gray`}>24h Volume</div>
                            <div className={`text-black`}>{`$${millify(Number(cryptoDetails['24hVolume']))}`}</div>
                        </div>
                    </div>

                    <div className={`flex flex-col p-4 shadow-md shadow-gray`}>
                        {links.map((elem,index) => {
                            return (
                                <div key={index} className={`w-80 flex justify-between items-center border-b-[1px] py-4 border-gray`}>
                                    <div className={`text-gray`}>{elem.type}</div>
                                    <a href={elem.url} target={`_blank`} rel="noopener noreferrer" className={`text-blue`}>{elem.name}</a>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className={`sm:w-3/4 m-auto w-full py-12`}>
                {parse(cryptoDetails.description)}
                </div>
            </div>
        </>
    );
}

export default CryptoDetails;