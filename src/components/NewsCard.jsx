import React from 'react';

function NewsCard({title,img ,simplified}) {

    return(
    <>
    <div className={`w-64 ${simplified?'h-56':'h-96'} shadow-md shadow-gray p-4 flex flex-col gap-4`}>

    {!simplified && <img src={img} alt="" className={`object-cover w-full h-32 `} />}

    <div className={`text-2xl min-h-1/4`}>{title}</div>
    </div>
    </>
    );
}

export default NewsCard;