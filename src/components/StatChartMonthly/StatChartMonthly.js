import React from 'react'
import { Line } from 'react-chartjs-2'
import { useLocation } from 'react-router-dom'
import { client } from '../../utils/api-client'
import { useQuery } from 'react-query'
import moment from 'moment'
import './StatChartMonthly.scss'

function StatChartMonthly() {
    const { pathname } = useLocation()

    let dateMonth = moment(new Date()).format('M')
    let dateYear = new Date().getFullYear()

    const [month, setMonth] = React.useState(dateMonth)

    let monthLimit = new Date().getMonth() + 1

    const MONTHS = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]

    const needMonths = MONTHS.slice(0, monthLimit)

    function findStatus(pathname) {
        if (pathname === '/chart-stat/monthly-stat') {
            return 'month/' + dateYear + '/'
        } else {
            return ''
        }
    }
    
    const fetchProjects = (month) => {
        return client(findStatus(pathname) + month)
    }

    const { data: graph } = useQuery(
        ['chart-stat-month', month],
        () => fetchProjects(month),
        { keepPreviousData: true }
    )

    function handleChange(evt) {
        console.log(evt.target.value)
        setMonth(evt.target.value)
    }

    let labelData = graph && graph.map((item) => item.day)
    let datasetData = graph && graph.map((item) => item.number)

    const data = {
        labels: labelData,
        datasets: [
            {
                label: moment(new Date()).format('MMMM'),
                fill: false,
                data: datasetData,
                borderColor: ['#8fd6e1'],
                backgroundColor: ['#8fd6e1'],
                pointBackgroundColor: ['#1597bb'],
                pointBorderdColor: ['#8fd6e1'],
            },
        ],
    }
    return (
        <>
            <select className='month-select' name='user_month' onClick={handleChange}>
                <option defaultValue={null} disabled>
                    Select month
                </option>
                {needMonths.map((n, i) => (
                    <option value={i + 1} key={i + n}>
                        {n}
                    </option>
                ))}
            </select>
            <Line data={data} width={500} />
        </>
    )
}

export default StatChartMonthly
