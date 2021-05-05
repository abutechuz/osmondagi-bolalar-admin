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
                    </form>
                </div>
             
                    <div className="categories-result__wrapper">
                        <h2 className="categories__heading">Mavjud Kategoriyalar</h2>
                    </div>
                </div>
             </Container>
        </section>
    ) 
}

export default Categories
