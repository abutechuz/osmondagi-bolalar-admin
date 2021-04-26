import React from 'react'
import { Line } from 'react-chartjs-2'
import { useLocation } from 'react-router-dom'
import { client } from '../../utils/api-client'
import { useQuery } from 'react-query'

function StatChartYearly() {
    const { pathname } = useLocation()
    let dateYear = new Date().getFullYear()

    function findStatus(pathname) {
        if (pathname === '/chart-stat/yearly-stat') {
            return 'year/' + dateYear
        } else {
            return ''
        }
    }

    const { data: graph } = useQuery({
        queryKey: 'chart-stat-year',
        queryFn: () => {
            return client(findStatus(pathname))
        },
    })
 
    let labelData = graph && graph.map((item) => item.month_bg)
    let datasetData = graph && graph.map((item) => item.stat)
  
    const data = {
        labels: labelData,
        datasets: [
            {
                label: 'Year',
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

export default StatChartYearly
