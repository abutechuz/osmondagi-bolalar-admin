import React from 'react'
import Container from '../Container/Container'
import './orders.scss'
import { useQuery } from 'react-query'
import TableController from '../TableContoller/TableController'

function Orders() {
    const [page, setPage] = React.useState(1)

    const [elements, setElements] = React.useState(0)

    const elList = React.useRef(null)

    const fetchProjects = (page = 0) =>
        fetch('http://165.227.211.149:5472/orders?l=5&p=' + page, {
            method: 'GET',
            headers: {
                token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I',
            },
        }).then((data) => data.json())

    const { data, isSuccess } = useQuery(
        ['orders', page],
        () => fetchProjects(page),
        { keepPreviousData: true }
    )

    React.useEffect(() => {
        setElements(elList?.current?.childElementCount)
    }, [data])

    return (
        <section className='orders'>
            <Container>
                <div className='orders__wrapper'>
                    <h2 className='orders__heading'>Buyurtmalar</h2>

                    <table className='orders__table'>
                        <thead>
                            <tr className='orders__table-row'>
                                <th className='orders__table-column'>Soni</th>
                                <th className='orders__table-column'>
                                    O'lchami
                                </th>
                                <th className='orders__table-column'>
                                    To'liq ism
                                </th>
                                <th className='orders__table-column'>
                                    Viloyat
                                </th>
                                <th className='orders__table-column'>
                                    Telefon raqami
                                </th>
                                <th className='orders__table-column'>
                                    To'liq manzili
                                </th>
                            </tr>
                        </thead>

                        <tbody ref={elList}>
                            {isSuccess &&
                                data?.map((order) => (
                                    <tr
                                        className='orders__table-row'
                                        key={order.order_id}>
                                        <td>{order.order_amount ?? '-'}</td>
                                        <td>{order.product_id ?? '-'}</td>
                                        <td>{order.order_fullname ?? '-'}</td>
                                        <td>{order.order_region ?? '-'}</td>
                                        <td>
                                            {order.order_phonenumber ?? '-'}
                                        </td>
                                        <td>{order.order_address ?? '-'}</td>
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

export default Orders
