import React from 'react'
import './categories.scss'
import Container from '../Container/Container'

function Categories() {
    return (
        <section className="categories">
             <Container>
                <div className="categories__products-wrapper">
                    <div className="categories__wrapper">
                    <h2 className="categories__heading">Kategoriya</h2>

                    <form action="/" method="POST">
                        <div className='categories__title-input-wrapper'>
                            <label htmlFor='category_title' className='webdash-team__label'>Kategoriya nomi</label>
                            
                            <input
                                className='webdash-team__input categories__input'
                                type='text'
                                id='category_title'
                                placeholder='Osmondagi bolalar futbolkasi'
                                required
                            />
                        </div>

                        <div className='categories__price-input-wrapper'>
                            <label htmlFor='category_price' className='webdash-team__label'>Narxi</label>
                            
                            <input
                                className='webdash-team__input categories__input'
                                type='number'
                                id='category_price'
                                placeholder='65000'
                                required
                            />
                        </div>

                        <div className='categories__file-input-wrapper'>
                            <label htmlFor='category_image' className='webdash-team__label'>Rasmi</label>
                            
                            <input
                                className='webdash-team__input categories__file-upload-input'
                                type='file'
                                id='category_image'
                                placeholder='Osmondagi bolalar futbolkasi'
                                required
                            />
                        </div>

                        <button className="categories__button">Submit</button>
                    </form>
                </div>
             
                    <div className="categories-result__wrapper">
                        <h2 className="categories__heading">Mavjud Kategoriyalar</h2>

                        <table className='orders__table'>
                            <thead>
                                <tr className='orders__table-row'>
                                    <th className='orders__table-column'>Kategoriya nomi</th>
                                    <th className='orders__table-column'>Narxi</th>
                                    <th className='orders__table-column'>O'chirish</th>
                                </tr>
                            </thead>

                            <tbody>
                                    <tr className="orders__table-row">
                                        <td>Futbolka</td>
                                        <td>65000</td>
                                        <td>
                                            <button className="categories__button categories__delete-button">Delete</button>
                                        </td>
                                    </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
             
                
                <div className="products__wrapper">
                    <div className="products__input-wrapper">
                        <h2 className="categories__heading">Mahsulotlar</h2>

                        <form action="/" method="POST">
                            <select className="products__select" name="category_id" id="category_id" required>
                                <option value="" disabled selected>Kategoriya turi</option>
                                <option value="">Fultbolkalar</option>
                            </select>

                            <select className="size__select" name="product_size " id="product_size" required>
                                <option value="" disabled selected>O'lchami</option>
                                <option value="xs">XS</option>
                                <option value="s">S</option>
                                <option value="m">M</option>
                                <option value="l">L</option>
                                <option value="xl">XL</option>
                                <option value="xxl">XXL</option>
                            </select>
                            
                            <button className="categories__button">Submit</button>
                        </form>
                    </div>
                
                    <div className="products__result">
                        <h2 className="categories__heading">Mavjud Mahsulotlar</h2>

                        <table className='orders__table'>
                            <thead>
                                <tr className='orders__table-row'>
                                    <th className='orders__table-column'>Kategoriya turi</th>
                                    <th className='orders__table-column'>O'lchami</th>
                                    <th className='orders__table-column'>O'chirish</th>
                                </tr>
                            </thead>

                            <tbody>
                                    <tr className="orders__table-row">
                                        <td>Futbolkalar</td>
                                        <td>M</td>
                                        <td>
                                            <button className="categories__button categories__delete-button">Delete</button>
                                        </td>
                                    </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
             </Container>
        </section>
    ) 
}

export default Categories
