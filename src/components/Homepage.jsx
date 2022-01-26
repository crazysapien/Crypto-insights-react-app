import millify from 'millify';
import React from 'react';
import { Link } from 'react-router-dom';
import { useGetStatsQuery } from '../services/cryptoApi';
import CryptoCurrencies from './CryptoCurrencies';
import NewsMarquee from './NewsMarquee';
import StatsCard from './StatsCard';
import Loading from './Loading'

function Homepage() {

    const { data: stats, isFetching } = useGetStatsQuery();

    if (isFetching) {
        return <Loading/>;
    }
    const values = {
        totalcoins: stats?.data?.totalCoins,
        totalmarkets: stats?.data?.totalMarkets,
        totalexchanges: stats?.data?.totalExchanges,
        totalmarketcap: stats?.data?.totalMarketCap,
        total24hvolume: stats?.data?.total24hVolume,
    }

    return (
        <>
            <div className={`w-full p-8 min-h-screen`}>
                <div className={`text-3xl m-4 text-black`}>Global crypto statistics</div>
                <div className={`w-full mx-auto my-8 bg-white flex justify-between flex-wrap`}>
                <StatsCard title={'Total Coins'} value={millify(values.totalcoins)} />
                <StatsCard title={'Total Exchanges'} value={millify(values.totalexchanges)} />
                <StatsCard title={'Total MarketCap'} value={`$${millify(values.totalmarketcap)}`} />
                <StatsCard title={'Total 24H Volume'} value={`$${millify(values.total24hvolume)}`} />
                </div>

                <div className={`flex justify-between m-4`}>
                    <div className={`text-3xl text-black`}>Top 10 cryptocurrencies</div>
                    <Link to='/cryptocurrencies' className={`text-xl text-blue`}>show all</Link>
                </div>
                <div className={`w-full mb-8`}>
                    <CryptoCurrencies simplified />
                </div>

                <div className={`flex justify-between m-4 h-auto`}>
                    <div className={`text-3xl text-black`}>Crypto news</div>
                    <Link to='/news' className={`text-xl text-blue`}>show all</Link>
                </div>
                <div className={`w-full h-96 p-4 my-8`}>
                    <NewsMarquee />
                </div>

            </div>
        </>
    );
}

export default Homepage;