import React from 'react'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
} from 'chart.js';
import { Radar } from 'react-chartjs-2'

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
);

export default function StatusChart({stats}) {
    const options = {
        indexAxis: 'y',
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Status',
            },
        },
    }
    const labels = ['HP', 'AT', 'DF', 'SA', 'SD', 'SP']
    const data = {
        labels,
        datasets: [{
            data: stats,
            backgroundColor: 'rgba(255, 99, 132, 0.4)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        }],
    }

    return (
        <Radar options={options} data={data} />
        // <div></div>
    )
}