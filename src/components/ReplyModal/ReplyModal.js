import './ReplyModal.scss'
import React from 'react'

function ReplyModal({ modal, setModal }) {
    function handleClose() {
        setModal(false)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
    }
    return (
        <>
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
                            placeholder='Javob yozing ...'
                        />
                        <button className='reply-modal__submit-btn'>
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ReplyModal
