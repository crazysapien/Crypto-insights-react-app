import React from "react";

function StatsCard ({title , value }) {

    return (
        <>
        <div className={`w-52 h-36 m-4 flex flex-col items-center justify-around hover:shadow-md hover:shadow-gray`}>
        <div className={`text-2xl font-sans`}>{title}</div>
        <div className={`text-4xl`}>{value}</div>
        </div>
        </>
    );
}

export default StatsCard;