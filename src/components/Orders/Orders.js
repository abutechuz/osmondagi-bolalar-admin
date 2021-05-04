import React from 'react'
import Container from '../Container/Container'
import './orders.scss'

function Orders() {
    const [orders, setOrders] = React.useState()

    fetch('http://192.168.0.208:5000/orders', {
            method: 'GET',
            headers: {
                token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I',
            },
        }).then(data => data.json()).then(data => setOrders(data))

    return (
        <section className="orders">
            <Container>
                <div className="orders__wrapper">
                    <h2 className="orders__heading">Buyurtmalar</h2>

                    <table className="orders__table">
                        <tr className="orders__table-row">
                            <th className="orders__table-column">Soni</th>
                            <th className="orders__table-column">O'lchami</th>
                            <th className="orders__table-column">To'liq ism</th>
                            <th className="orders__table-column">Viloyat</th>
                            <th className="orders__table-column">Telefon raqami</th>
                            <th className="orders__table-column">To'liq manzili</th>
                        </tr>

                        {orders && orders?.map((order) => (
                        <tr className="orders__table-row">
                            <td>{order.order_amount ?? '-'}</td>
                            <td>{order.product_id ?? '-'}</td>
                            <td>{order.order_fullname ?? '-'}</td>
                            <td>{order.order_region ?? '-'}</td>
                            <td>{order.order_phonenumber ?? '-'}</td>
                            <td>{order.order_address ?? '-'}</td>
                        </tr>
                        ))}
                    </table>
                </div>
            </Container>
        </section>
    )
}

export default Orders
