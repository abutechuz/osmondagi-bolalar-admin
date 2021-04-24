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
            <h2 className='speaker-section__heading title'>
                Barcha Speaker uchun Takliflar
            </h2>
            <table className='speaker-table'>
                <thead className='speaker-table'>
                    <tr className='speaker-table__item'>
                        <th className='speaker-table__right-box'>ID</th>
                        <th className='speaker-table__right-box'>
                            Speaker ismi
                        </th>
                        <th className='speaker-table__right-box'>
                            Speaker familiyasi
                        </th>
                        <th className='speaker-table__right-box'>Kasbi</th>
                        <th className='speaker-table__right-box'>Yoshi</th>
                        <th className='speaker-table__right-box'>Ish joyi</th>
                        <th className='speaker-table__right-box'>
                            Tavsiya etilgan vaqt
                        </th>
                    </tr>
                </thead>
                <tbody className='speaker-table__body'>
                    {isSuccess &&
                        data?.map((speaker) => (
                            <tr className='speaker-table__item'>
                                <td className='speaker-table__right-box'>
                                    {speaker.id ?? 'kiritilmagan'}
                                </td>
                                <td className='speaker-table__right-box'>
                                    {speaker.name ?? 'kiritilmagan'}
                                </td>
                                <td className='speaker-table__right-box'>
                                    {speaker.surname ?? 'kiritilmagan'}
                                </td>
                                <td className='speaker-table__right-box'>
                                    {speaker.profession ?? 'kiritilmagan'}
                                </td>
                                <td className='speaker-table__right-box'>
                                    {speaker.age ?? 'kiritilmagan'}
                                </td>
                                <td className='speaker-table__right-box'>
                                    {speaker.workplace ?? 'kiritilmagan'}
                                </td>
                                <td className='speaker-table__right-box'>
                                    {speaker.time ?? 'kiritilmagan'}
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            <TableController />
        </div>
    )
}

export default SpeakerTable
