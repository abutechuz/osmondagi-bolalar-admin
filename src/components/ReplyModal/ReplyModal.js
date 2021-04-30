import './ReplyModal.scss'
import React from 'react'

function ReplyModal({ modal, setModal, question, chatId }) {
    function handleClose() {
        setModal(false)
    }

    function handleSubmit(evt) {
        evt.preventDefault()
        const { user_answer } = evt.target.elements

        fetch('http://165.227.211.149:4000/question/response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chatId: chatId,
                userQuestion: question,
                resText: user_answer.value.trim(),
            }),
        })

        setModal(false)
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
                            name='user_answer'
                            placeholder='Javob yozing ...'
                            required
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
