import React from 'react'
import TableController from '../TableContoller/TableController'
import './OfferTable.scss'

function OfferTable() {
    return (
        <div className='offer-list__wrapper'>
            <h2 className='offer-section__heading'>Barcha Takliflar</h2>
            <ul className='offer-list'>
                <li className='offer-list__item'>
                    <div className='offer-list__right-box'>
                        <h3 className='offer-list__username'>AbduQodir</h3>
                        <small className='offer-list__date'>24.05.2019</small>
                    </div>
                    <div className='offer-list__offer'>
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
                <li className='offer-list__item'>
                    <div className='offer-list__right-box'>
                        <h3 className='offer-list__username'>AbduQodir</h3>
                        <small className='offer-list__date'>24.05.2019</small>
                    </div>
                    <div className='offer-list__offer'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Inventore fugiat possimus tempora rem natus
                        assumenda alias illum eveniet nam dicta!
                    </div>
                </li>
                <li className='offer-list__item'>
                    <div className='offer-list__right-box'>
                        <h3 className='offer-list__username'>AbduQodir</h3>
                        <small className='offer-list__date'>24.05.2019</small>
                    </div>
                    <div className='offer-list__offer'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Inventore fugiat possimus tempora rem natus
                        assumenda alias illum eveniet nam dicta!
                    </div>
                </li>
                <li className='offer-list__item'>
                    <div className='offer-list__right-box'>
                        <h3 className='offer-list__username'>AbduQodir</h3>
                        <small className='offer-list__date'>24.05.2019</small>
                    </div>
                    <div className='offer-list__offer'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Inventore fugiat possimus tempora rem natus
                        assumenda alias illum eveniet nam dicta!
                    </div>
                </li>
                <li className='offer-list__item'>
                    <div className='offer-list__right-box'>
                        <h3 className='offer-list__username'>AbduQodir</h3>
                        <small className='offer-list__date'>24.05.2019</small>
                    </div>
                    <div className='offer-list__offer'>
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

export default OfferTable
