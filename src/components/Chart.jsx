import React,{useEffect} from 'react';

// related to chart js 
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend,} from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend);


function Chart({ coinHistory}) {

    const coinPrice = [];
    const coinTimestamp = [];

    // poplulating the coinPrice array with data provided by coinHistory 
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price);
    }
    // poplulating the coinTimeStamp array with data provided by coinHistory to be used as label for chart
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.unshift(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price is USD',
                data: coinPrice,
                fill: false,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
        ],
    };
    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

    return (
        <div className={`w-full`}>
            < Line data={data} options={options} />
        </div>
    );
}

export default Chart;