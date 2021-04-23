import React from 'react'
import { IconPrev, IconNext } from '../Svgs/Svgs'
import './TableController.scss'

function TableController() {
    return (
        <div className='table-controllers'>
            <button className='table-control'>
                <IconPrev />
            </button>
            <button className='table-control'>
                <IconNext />
            </button>
        </div>
    )
}

export default TableController
