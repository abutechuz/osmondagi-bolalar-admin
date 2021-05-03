import React from 'react'
import Container from '../Container/Container'
import './orders.scss'

function Orders() {
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
                        <tr className="orders__table-row">
                            <td>2</td>
                            <td>L</td>
                            <td>Jakhongir Sagdullaev</td>
                            <td>Qashqadaryo</td>
                            <td>+998990171448</td>
                            <td>Qarshi Shahri, Oq-tepa mahallasi, 1-uy</td>
                        </tr>
                    </table>
                </div>
            </Container>
        </section>
    )
}

export default Orders
