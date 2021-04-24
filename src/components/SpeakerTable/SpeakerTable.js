import React from 'react'
import TableController from '../TableContoller/TableController'
import './SpeakerTable.scss'
import { useAsync } from '../../hooks/useAsync'
import { client } from '../../utils/api-client'

function SpeakerTable() {
    const { data, isSuccess, run } = useAsync()

    React.useEffect(() => {
        run(client('speakers'))
    }, [run])

    return (
        <div className='speaker-table__wrapper'>
            <h2 className='speaker-section__heading'>
                Barcha Speaker uchun Takliflar
            </h2>
            <thead className='speaker-table'>
                <tr className='speaker-table__item'>
                    <th className='speaker-table__right-box'>
                        <h3 className='speaker-table__username'>ID</h3>
                    </th>
                    <th className='speaker-table__right-box'>
                        <h3 className='speaker-table__username'>
                            Speaker ismi
                        </h3>
                    </th>
                    <th className='speaker-table__right-box'>
                        <h3 className='speaker-table__username'>
                            Speaker familiyasi
                        </h3>
                    </th>
                    <th className='speaker-table__right-box'>
                        <h3 className='speaker-table__username'>Kasbi</h3>
                    </th>
                    <th className='speaker-table__right-box'>
                        <h3 className='speaker-table__username'>Yoshi</h3>
                    </th>
                    <th className='speaker-table__right-box'>
                        <h3 className='speaker-table__username'>Ish joyi</h3>
                    </th>
                    <th className='speaker-table__right-box'>
                        <h3 className='speaker-table__username'>
                            Tavsiya etilgan vaqt
                        </h3>
                    </th>
                </tr>
                <tbody className='speaker-table__body'>
                {isSuccess &&
                    data?.map((speaker) => (
                        <tr className='speaker-table__item'>
                            <div className='speaker-table__right-box'>
                                <h3 className='speaker-table__username'>
                                    {speaker.id ?? 'kiritilmagan'}
                                </h3>
                            </div>
                            <div className='speaker-table__right-box'>
                                <h3 className='speaker-table__username'>
                                    {speaker.name ?? 'kiritilmagan'}
                                </h3>
                            </div>
                            <div className='speaker-table__right-box'>
                                <h3 className='speaker-table__username'>
                                    {speaker.surname ?? 'kiritilmagan'}
                                </h3>
                            </div>
                            <div className='speaker-table__right-box'>
                                <h3 className='speaker-table__username'>
                                    {speaker.profession ?? 'kiritilmagan'}
                                </h3>
                            </div>
                            <div className='speaker-table__right-box'>
                                <h3 className='speaker-table__username'>
                                    {speaker.age ?? 'kiritilmagan'}
                                </h3>
                            </div>
                            <div className='speaker-table__right-box'>
                                <h3 className='speaker-table__username'>
                                    {speaker.workplace ?? 'kiritilmagan'}
                                </h3>
                            </div>
                            <div className='speaker-table__right-box'>
                                <h3 className='speaker-table__username'>
                                    {speaker.time ?? 'kiritilmagan'}
                                </h3>
                            </div>
                        </tr>
                    ))}
                    </tbody>
            </thead>

            <TableController />
        </div>
    )
}

export default SpeakerTable
