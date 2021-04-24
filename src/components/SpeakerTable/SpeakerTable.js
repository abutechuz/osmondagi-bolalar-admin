import React from 'react'
import TableController from '../TableContoller/TableController'
import './SpeakerTable.scss'
import { useAsync } from '../../hooks/useAsync'
import { client } from '../../utils/api-client'

function SpeakerTable() {
    const { data, isSuccess, run } = useAsync()

    React.useEffect(() => {
        run(client('speakers').then((data) => console.log(data)))
    }, [run])

    return (
        <div className='speaker-list__wrapper'>
            <h2 className='speaker-section__heading'>
                Barcha Speaker uchun Takliflar
            </h2>
            <ul className='speaker-list'>
                <li className='speaker-list__item'>
                    <div className='speaker-list__right-box'>
                        <h3 className='speaker-list__username'>ID</h3>
                    </div>
                    <div className='speaker-list__right-box'>
                        <h3 className='speaker-list__username'>Speaker ismi</h3>
                    </div>
                    <div className='speaker-list__right-box'>
                        <h3 className='speaker-list__username'>
                            Speaker familiyasi
                        </h3>
                    </div>
                    <div className='speaker-list__right-box'>
                        <h3 className='speaker-list__username'>
                            Kasbi
                        </h3>
                    </div>
                    <div className='speaker-list__right-box'>
                        <h3 className='speaker-list__username'>
                            Yoshi
                        </h3>
                    </div>
                    <div className='speaker-list__right-box'>
                        <h3 className='speaker-list__username'>
                            Ish joyi
                        </h3>
                    </div>
                    <div className='speaker-list__right-box'>
                        <h3 className='speaker-list__username'>
                            Tavsiya etilgan vaqt
                        </h3>
                    </div>
                </li>
            </ul>

            <TableController />
        </div>
    )
}

export default SpeakerTable
