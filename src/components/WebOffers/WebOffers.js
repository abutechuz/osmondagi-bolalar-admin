import React from 'react'
import './WebOffers.scss'

function WebOffers() {
    return (
        <section className='offer-section'>
            <form className='webdash-offer__form'>
                <div className='webdas-offer__left'>
                    <div className='webdash-offer__input-wrapper'>
                        <label
                            htmlFor='member-offer_img_link'
                            className='webdash-offer__label'>
                            Ism va Familiya
                        </label>
                        <input
                            className='webdash-offer__input'
                            type='text'
                            id='member-offer_img_link'
                            placeholder='Eshmatov Toshmat...'
                        />
                    </div>
                </div>

                <div className='webdash-offer__right'>
                    <div className='webdash-offer__input-wrapper'>
                        <label
                            htmlFor='member-offer_summary '
                            className='webdash-offer__label'>
                            Taklif 
                        </label>

                        <textarea
                            className='webdash-offer__textarea'
                            type='text'
                            id='member-offer_summary '
                            placeholder='Taklif'
                        >
                        </textarea>
                    </div>
                </div>

                <button className='webdash-offer__submit-btn'>Submit</button>
            </form>
        </section>
    )
}

export default WebOffers
