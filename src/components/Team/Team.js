import React from 'react'
import './Team.scss'

function Team() {
    return (
        <section className='team-section'>
            <form className='webdash-team__form'>
                <div className='webdas-team__left'>
                    <div className='webdash-team__input-wrapper'>
                        <label
                            htmlFor='member_fullname'
                            className='webdash-team__label'>
                            Ism va Familiya
                        </label>
                        <input
                            className='webdash-team__input'
                            type='text'
                            id='member_fullname'
                            placeholder='Eshmatov Toshmat...'
                        />
                    </div>

                    <div className='webdash-team__input-wrapper'>
                        <label
                            htmlFor='member_status'
                            className='webdash-team__label'>
                            Status
                        </label>
                        <input
                            className='webdash-team__input'
                            type='text'
                            id='member_status'
                            placeholder='Fermer...'
                        />
                    </div>

                    <div className='webdash-team__input-wrapper'>
                        <label
                            htmlFor='member_img_link'
                            className='webdash-team__label'>
                            Rasmi
                        </label>
                        <input
                            className='webdash-team__input'
                            type='file'
                            id='member_img_link'
                        />
                    </div>
                </div>

                <div className='webdash-team__right'>
                    <div className='webdash-team__input-wrapper'>
                        <label
                            htmlFor='member_telegram_link'
                            className='webdash-team__label'>
                            Telegram manzili
                        </label>
                        <input
                            className='webdash-team__input'
                            type='text'
                            id='member_telegram_link'
                            placeholder='link...'
                        />
                    </div>

                    <div className='webdash-team__input-wrapper'>
                        <label
                            htmlFor='member_facebook_link'
                            className='webdash-team__label'>
                            Facebook manzili
                        </label>
                        <input
                            className='webdash-team__input'
                            type='text'
                            id='member_facebook_link'
                            placeholder='link...'
                        />
                    </div>

                    <div className='webdash-team__input-wrapper'>
                        <label
                            htmlFor='member_instagram_link'
                            className='webdash-team__label'>
                            Instagram manzili
                        </label>
                        <input
                            className='webdash-team__input'
                            type='text'
                            id='member_instagram_link'
                            placeholder='link...'
                        />
                    </div>
                </div>

                <button className='webdash-team__submit-btn'>Submit</button>
            </form>
        </section>
    )
}

export default Team
