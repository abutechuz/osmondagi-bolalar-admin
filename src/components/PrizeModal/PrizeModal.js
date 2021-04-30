import React from 'react'

function PrizeModal({ modal, handleClose, handleSubmit }) {
    return (
        <div
            className='reply-modal__wrapper'
            style={{ display: modal ? 'flex' : 'none' }}>
            <div className='reply-modal__box'>
                <div className='reply-modal__header'>
                    <h3 className='reply-modal__heading'>Javob yo'llash</h3>
                    <button
                        className='reply-modal__heading-close'
                        onClick={handleClose}>
                        Close
                    </button>
                </div>

                <form className='reply-modal__form' onSubmit={handleSubmit}>
                    <input
                        className='reply-modal__input'
                        type='text'
                        name='user_answer'
                        placeholder='Javob yozing ...'
                        required
                    />
                    <button className='reply-modal__submit-btn'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default PrizeModal
