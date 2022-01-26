import React from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi'
import NewsCard from './NewsCard';
import Loading from './Loading'


function News() {

    const { data, isFetching } = useGetCryptoNewsQuery({ category: 'cryptocurrency', count:20 ,page:1});
    const news = data?.articles ;
    if(isFetching){
        return <Loading/>;
    }
    return (
        <>
            <div className={`flex flex-wrap justify-center p-8 w-full m-auto`}>
                {news.map(elem => {
                    return (
                        <span key={elem.url} className="mx-4 text-4xl"><NewsCard title={elem.title} desc={elem.description} img={elem.urlToImage} /></span>
                    );
                })}
            </div>
        </>
    );
}

export default News;