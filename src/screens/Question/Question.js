import React from 'react'
import QuestionTable from '../../components/QuestionTable/QuestionTable'

function Question() {
    return (
        <section className='question-section'>
            <h2 className='visually-hidden'>Savol javoblar bo'limi</h2>

            <QuestionTable />
        </section>
    )
}

export default Question
