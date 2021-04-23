import React from 'react'
import TableController from '../TableContoller/TableController'
import './QuestionTable.scss'
import { useAsync } from '../../hooks/useAsync'
import { client } from '../../utils/api-client'

function QuestionTable() {
    const { data, isLoading, isError, run } = useAsync()

    React.useEffect(() => {
        run(client('advices').then((data) => console.log(data)))
    }, [run])

    return (
        <div className='question-list__wrapper'>
            <h2 className='question-section__heading'>Barcha Savollar</h2>
            <ul className='question-list'>
                <li className='question-list__item'>
                    <div className='question-list__right-box'>
                        <h3 className='question-list__username'>AbduQodir</h3>
                        <small className='question-list__date'>
                            24.05.2019
                        </small>
                    </div>
                    <div className='question-list__question'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Inventore fugiat possimus tempora rem natus
                        assumenda alias illum eveniet nam dicta! Lorem ipsum
                        dolor, sit amet consectetur adipisicing elit. Inventore
                        fugiat possimus tempora rem natus assumenda alias illum
                        eveniet nam dicta! Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Inventore fugiat possimus
                        tempora rem natus assumenda alias illum eveniet nam
                        dicta! Lorem ipsum dolor, sit amet consectetur
                        adipisicing elit. Inventore fugiat possimus tempora rem
                        natus assumenda alias illum eveniet nam dicta!
                    </div>
                </li>
                <li className='question-list__item'>
                    <div className='question-list__right-box'>
                        <h3 className='question-list__username'>AbduQodir</h3>
                        <small className='question-list__date'>
                            24.05.2019
                        </small>
                    </div>
                    <div className='question-list__question'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Inventore fugiat possimus tempora rem natus
                        assumenda alias illum eveniet nam dicta!
                    </div>
                </li>
                <li className='question-list__item'>
                    <div className='question-list__right-box'>
                        <h3 className='question-list__username'>AbduQodir</h3>
                        <small className='question-list__date'>
                            24.05.2019
                        </small>
                    </div>
                    <div className='question-list__question'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Inventore fugiat possimus tempora rem natus
                        assumenda alias illum eveniet nam dicta!
                    </div>
                </li>
                <li className='question-list__item'>
                    <div className='question-list__right-box'>
                        <h3 className='question-list__username'>AbduQodir</h3>
                        <small className='question-list__date'>
                            24.05.2019
                        </small>
                    </div>
                    <div className='question-list__question'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Inventore fugiat possimus tempora rem natus
                        assumenda alias illum eveniet nam dicta!
                    </div>
                </li>
                <li className='question-list__item'>
                    <div className='question-list__right-box'>
                        <h3 className='question-list__username'>AbduQodir</h3>
                        <small className='question-list__date'>
                            24.05.2019
                        </small>
                    </div>
                    <div className='question-list__question'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Inventore fugiat possimus tempora rem natus
                        assumenda alias illum eveniet nam dicta!
                    </div>
                </li>
            </ul>

            <TableController />
        </div>
    )
}

export default QuestionTable
