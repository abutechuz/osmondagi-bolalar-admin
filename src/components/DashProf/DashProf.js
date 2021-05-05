import './DashProf.scss'
import '../DashReg/DashReg.scss'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'
import { stil } from '../../hooks/useDio'

function DashProf() {
    const { data, isSuccess } = useQuery({
        queryKey: 'profession',
        queryFn: () => client('profession'),
    })

    const sortedData =
        isSuccess && data.sort((a, b) => a.percent - b.percent).reverse()

    return (
        <>
            <div className='stats__prof stats-prof'>
                <h3 className='stats-prof__title'>Profession</h3>
                <ul className='stats-prof__list'>
                    {isSuccess &&
                        sortedData?.map((e, i) => (
                            <li
                                className='stats-prof__item'
                                key={Math.random()}
                                style={{ background: stil(e?.percent)[1] }}>
                                <p className='stats-prof__text'>{e.text}</p>
                                <span
                                    className='stats-prof__span'
                                    style={{ background: stil(e?.percent)[0] }}>
                                    {e.percent}%
                                </span>
                                <span
                                    className='stats-reg__count'
                                    style={{
                                        background: stil(e?.percent)[0],
                                        borderColor: stil(e?.percent)[0],
                                    }}>
                                    {e?.count}
                                </span>
                            </li>
                        ))}
                </ul>
            </div>
        </>
    )
}

export default DashProf
