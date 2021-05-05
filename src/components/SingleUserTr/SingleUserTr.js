import React from 'react'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'

function SingleUserTr({ user }) {
    const { data: productData, isSuccess: isProSuccess } = useQuery({
        queryKey: 'products',
        queryFn: () => client('products'),
    })

    const [prize, setPrize] = React.useState()

    function handlePrizeSelect(evt) {
        setPrize(evt.target.value)
    }

    function handleChangePrize(evt) {
        client('userscore', {
            data: {
                user_tg_id: evt.target.dataset.tgid,
                product_id: prize,
            },
        }).then((data) => alert(data.message))
    }
    return (
        <tr className='user-table__body' key={user.id + Math.random()}>
            <td className='user-table__body-td user-table__body-td-id'>
                {user.id ?? '-'}
            </td>
            <td className='user-table__body-td user-table__body-td-name'>
                {user.name ?? '-'}
            </td>
            <td className='user-table__body-td user-table__body-td-surname'>
                {user.surname ?? '-'}
            </td>
            <td className='user-table__body-td user-table__body-td-profession'>
                {user.profession.text ?? '-'}
            </td>
            <td className='user-table__body-td user-table__body-td-birth'>
                {user.birthyear ?? '-'}
            </td>
            <td className='user-table__body-td user-table__body-td-gender'>
                {user.gender ?? '-'}
            </td>
            <td className='user-table__body-td user-table__body-td-region'>
                {user.region ?? '-'}
            </td>
            <td className='user-table__body-td user-table__body-td-score'>
                {user.score ?? '-'}
            </td>
            <td className='user-table__body-td user-table__body-td-score'>
                <select
                    className='user-table__prize-select'
                    name={'user_prize_select_' + user.id}
                    defaultValue='prize'
                    onChange={handlePrizeSelect}>
                    <option value='prize' disabled>
                        prize
                    </option>
                    {isProSuccess &&
                        productData.map((e) => (
                            <option value={e.product_id} key={e.product_id}>
                                {e.product_name}
                            </option>
                        ))}
                </select>
            </td>
            <td className='user-table__body-td user-table__body-td-score'>
                <button
                    className='user-table__send-button'
                    type='button'
                    onClick={handleChangePrize}
                    data-tgid={user?.user_tg_id}>
                    Send
                </button>
            </td>
        </tr>
    )
}

export default SingleUserTr
