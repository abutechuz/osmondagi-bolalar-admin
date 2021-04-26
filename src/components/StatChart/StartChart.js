import React from 'react'
import { Line } from 'react-chartjs-2'
import { useLocation } from 'react-router-dom'
import { client } from '../../utils/api-client'
import { useQuery } from 'react-query'

function StatChart() {
    const { pathname } = useLocation()
    let date = new Date().getFullYear
    
    const { data: graph } = useQuery({
        queryKey: 'chart-stat',
        queryFn: () => client(`year/${date}`),
    })

    let labelData = graph && graph.map((d) => d.month_bg)
    let datasetData = graph && graph.map((d) => d.stat)

    const data = {
        labels: labelData,
        datasets: [
            {
                label: 'Trend',
                fill: false,
                data: datasetData,

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
