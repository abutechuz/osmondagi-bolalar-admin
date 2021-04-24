import React from 'react'
import TableController from '../TableContoller/TableController'
import { useAsync } from '../../hooks/useAsync'
import { client } from '../../utils/api-client'
import './OfferTable.scss'

function OfferTable() {
    const { data, isSuccess, run } = useAsync()

    React.useEffect(() => {
        run(client('advices'))
    }, [run])

    return (
        <div className='offer-list__wrapper'>
            <h2 className='offer-section__heading'>Barcha Takliflar</h2>
            <ul className='offer-list'>
                {isSuccess &&
                    data?.map((offer) => (
                        <li className='offer-list__item'>
                            <div className='offer-list__id'>
                                {offer?.id}. 
                            </div>
                            <div className='offer-list__right-box'>
                                <h3 className='offer-list__username'>
                                    {offer?.username}
                                </h3>
                                <small className='offer-list__date'>
                                    {offer?.time}
                                </small>
                            </div>
                            <div className='offer-list__offer'>
                                {offer?.advice}
                            </div>
                        </li>
                    ))}
            </ul>

            <TableController />
        </div>
    )
}

export default OfferTable
