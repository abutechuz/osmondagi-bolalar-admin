import React from 'react'
import './QuestionTable.scss'

function QuestionTable() {
    return (
        <div className='question-table__wrapper'>
            <table className='question-table'>
                <thead className='question-table__head'>
                    <tr className='question-table__head-tr'>
                        <th className='question-table__head-th'>ID</th>
                        <th className='question-table__head-th' rowSpan='2'>Username</th>
                        <th className='question-table__head-th'>Date</th>
                    </tr>
                </thead>

                <tbody className='question-table__body'>
                    <tr className="question-table__body-tr">
                        <td className="question-table__body-td"></td>
                        <td className="question-table__body-td"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default QuestionTable
