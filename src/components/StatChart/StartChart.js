import React from 'react'
import { Line } from 'react-chartjs-2'

function StatChart() {
    const data = {
        labels: [
            'Jan',
            'Feb',
            'March',
            'April',
            'May',
            'June',
            'July',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ],
        datasets: [
            {
                label: "Trend",
                fill: false,
                data: [4, 5, 4, 8, 8, 7, 25],

                borderColor: ['rgba(81, 212, 170, 0.8'],
                backgroundColor: ['rgba(81, 212, 170, 0.8'],
                pointBackgroundColor: ['rgb(81, 175, 170'],
                pointBorderdColor: ['rgb(54,55,64'],
            },
        ],
    }
    return (
        <>
            <Line data={data} width={500} />
        </>
    )
}

export default StatChart
