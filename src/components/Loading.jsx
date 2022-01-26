import React from 'react';
import spinner from '../Infinity-1s-200px.svg'
function Loading() {

    return (
        <>
        <div className={`flex justify-center`}>
        <img src={spinner} alt="" className={`w-16`} />
        </div>
        </>
    );
}

export default Loading;