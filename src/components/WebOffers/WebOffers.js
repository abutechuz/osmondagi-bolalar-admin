import React from 'react'
import { useQuery } from 'react-query'
import Container from '../Container/Container'
import moment from 'moment'
import './WebOffers.scss'
import TableController from '../TableContoller/TableController'

function WebOffers() {
    const [page, setPage] = React.useState(1)

    const [elements, setElements] = React.useState(0)

    const elList = React.useRef(null)

    const fetchProjects = (page = 0) =>
        fetch('https://api.osmondagibolalar.uz/offers?l=5&p=' + page, {
            method: 'GET',
            headers: {
                token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I',
            },
        }).then((data) => data.json())

    const { data, isSuccess } = useQuery(
        ['offers', page],
        () => fetchProjects(page),
        { keepPreviousData: true }
    )

    React.useEffect(() => {
        setElements(elList?.current?.childElementCount)
    }, [data])

    return (
        <section className='offers'>
            <Container>
                <div className='offers__wrapper'>
                    <h2 className='offers__heading'>Takliflar</h2>

                    <table className='offers__table'>
                        <thead>
                            <tr className='offers__table-row'>
                                <th className='offers__table-column'>
                                    To'liq ism
                                </th>
                                <th className='offers__table-column'>Sana</th>
                                <th className='offers__table-column'>Taklif</th>
                            </tr>
                        </thead>
                        <tbody ref={elList}>
                            {isSuccess &&
                                data.map((offer) => (
                                    <tr
                                        className='offers__table-row'
                                        key={
                                            offer.offer_id +
                                            offer.offer_fullname
                                        }>
                                        <td>{offer.offer_fullname}</td>
                                        <td>
                                            {moment(offer.offer_sent_at).format(
                                                'L'
                                            )}
                                        </td>

                                        <td>{offer.offer_summary}</td>
                                    </tr>
                                ))}
                        </tbody>
                    </table>

                    <TableController
                        setPage={setPage}
                        page={page}
                        numberLi={elements}
                    />
                </div>
            </Container>
        </section>
    )
}

export default WebOffers
