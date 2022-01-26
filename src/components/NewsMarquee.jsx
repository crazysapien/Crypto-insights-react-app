import React from "react";
import NewsCard from "./NewsCard";
import {useGetCryptoNewsQuery} from '../services/cryptoNewsApi'
import Loading from './Loading'

function NewsMarquee() {

    const {data, isFetching } = useGetCryptoNewsQuery({category:'cryptocurrency',count:20,page:1});
    const news = data?.articles ;

    if(isFetching){
        return <Loading/> ;
    }

    return (
        <>
            <div className="relative flex overflow-x-hidden">
                <div className="py-12 animate-marquee flex">
                {news.map(elem => {
                    return (
                        <span key={elem.url} className="mx-4 text-4xl"><NewsCard simplified title={elem.title} desc={elem.description} img={elem.urlToImage} /></span>
                    );
                })}
                </div>

                <div className="absolute top-0 py-12 animate-marquee2 flex">
                {news.map(elem => {
                    return (
                        <span key={elem.url} className="mx-4 text-4xl"><NewsCard simplified title={elem.title} desc={elem.description} img={elem.urlToImage} /></span>
                    );
                })}
                </div>
            </div>
        </>
    );
};

export default NewsMarquee;