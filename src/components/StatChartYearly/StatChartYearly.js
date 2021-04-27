import React from 'react'
import { Line } from 'react-chartjs-2'
import { useLocation } from 'react-router-dom'
import { client } from '../../utils/api-client'
import { useQuery } from 'react-query'
import moment from 'moment'

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
                label: dateYear,
                fill: false,
                data: datasetData,
                borderColor: ['#fc8621'],
                backgroundColor: ['#fc8621'],
                pointBackgroundColor: ['#c24914'],
                pointBorderdColor: ['#c24914'],
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
