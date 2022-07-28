import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './ForecastChart.css';

Chart.register(...registerables);





function ForecastChart(props) {

    const [maxTemps, setMaxTemps] = useState([]);
    const [minTemps, setMinTemps] = useState([]);

    const updateTemps = () => {
        let maxTemp = [];
        let minTemp = [];
        for (let i=0; i < 8; i++) {
            maxTemp.push(props.data.daily[i].temp.max)
            minTemp.push(props.data.daily[i].temp.min)
        }
        setMaxTemps(maxTemp);
        setMinTemps(minTemp);
    }
    useEffect(() => {
        updateTemps();

    },[])

    const data = {
        labels: props.week,
        datasets: [
            {
                label: "Highs",
                lineTension: .25,
                data: maxTemps,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Lows",
                lineTension: .25,
                data: minTemps,
                fill: false,
                borderColor: "#742774"
            }
        ]
    }

    return (
        <div className='plot container' style={{height: 200}}>
            <Line className='chart' data={data} options={{maintainAspectRatio: false, bezierCurve: true}}/>
        </div>
    );
}

export default ForecastChart;
