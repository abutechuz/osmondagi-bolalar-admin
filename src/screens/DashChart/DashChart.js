import React from 'react'
import StatChart from '../../components/StatChart/StartChart'
import DashChartNav from '../../components/DashChartNav/DashChartNav'
import './DashChart.scss'

function DashChart() {
    return (
        <div className='dashchart-wrapper'>
            <DashChartNav />
            <h2 className='dashchart-heading'>Foydalanuvchilar qo'shilishi</h2>
            <StatChart className='dashchart-stat' />
        </div>
    )
}

export default DashChart
