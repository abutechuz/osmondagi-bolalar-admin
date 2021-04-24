import React from 'react'
import TableController from '../TableContoller/TableController'
import './QuestionTable.scss'
import { useAsync } from '../../hooks/useAsync'
import { client } from '../../utils/api-client'

function QuestionTable() {
    const { data, isSuccess, run } = useAsync()

    React.useEffect(() => {
        run(client('questions'))
    }, [run])

    return (
        <div className='question-list__wrapper'>
            <h2 className='question-section__heading'>Barcha Savollar</h2>
            <ul className='question-list'>
                {isSuccess &&
                    data?.map((q) => (
                        <li className='question-list__item' key={q?.time}>
                            <div className='question-list__right-box'>
                                <h3 className='question-list__username'>
                                    {q?.username}
                                </h3>
                                <small className='question-list__date'>
                                    {q?.time}
                                </small>
                            </div>
                            <div className='question-list__question'>
                                {q?.question}
                            </div>
                        </li>
                    ))}
            </ul>

            <TableController />
        </div>
    )
}

export default QuestionTable
