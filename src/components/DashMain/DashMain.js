import React from 'react'
import './DashMain.scss'
import { Male, Female, User } from '../Svgs/Svgs'
import Container from '../Container/Container'
import { useAsync } from '../../hooks/useAsync'
import { client } from '../../utils/api-client'

function DashMain() {
    const { data, isLoading, isError, isSuccess, run } = useAsync()

    React.useEffect(() => {
        run(client('gender'))
    }, [run])

    console.log(data)
    return (
        <>
            <section className='genral-stat'>
                <Container className='genral-stat__container'>
                    <ul className='genral-stat__list'>
                        <li className='genral-stat__item'>
                            <div className='genral-stat__item-top'>
                                <p className='genral-stat__item-text'>
                                    Foydalanuvchi
                                </p>
                                <User className='genral-stat__item-svg' />
                            </div>
                            <div className='genral-stat__item-botom'>
                                <span className='genral-stat__item-span'>
                                    271 people
                                </span>
                            </div>
                        </li>
                        <li className='genral-stat__item'>
                            <div className='genral-stat__item-top'>
                                <p className='genral-stat__item-text'>
                                    Erkaklar
                                </p>
                                <Male className='genral-stat__item-svg' />
                            </div>
                            <div className='genral-stat__item-botom'>
                                <span className='genral-stat__item-span'>
                                    {isSuccess && data[0].counter} people
                                </span>
                                <span className='genral-stat__item-span'>
                                    {isSuccess && data[0].percent + '%'}
                                </span>
                            </div>
                        </li>
                        <li className='genral-stat__item'>
                            <div className='genral-stat__item-top'>
                                <p className='genral-stat__item-text'>Ayolar</p>
                                <Female className='genral-stat__item-svg' />
                            </div>
                            <div className='genral-stat__item-botom'>
                                <span className='genral-stat__item-span'>
                                    {isSuccess && data[0].counter} people
                                </span>
                                <span className='genral-stat__item-span'>
                                    {isSuccess && data[0].percent + '%'}
                                </span>
                            </div>
                        </li>
                    </ul>
                </Container>
            </section>
        </>
    )
}

export default DashMain
