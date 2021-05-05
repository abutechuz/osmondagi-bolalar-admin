import React from 'react'
import TableController from '../TableContoller/TableController'
import './UserTable.scss'
import { useQuery } from 'react-query'
import { client } from '../../utils/api-client'
import SingleUserTr from '../SingleUserTr/SingleUserTr'

function UserTable() {
    const [page, setPage] = React.useState(1)

    const [elements, setElements] = React.useState(0)

    const elList = React.useRef(null)

    const fetchProjects = (page = 0) => client('users?limit=5&page=' + page)

    const { data, isSuccess } = useQuery(
        ['users', page],
        () => fetchProjects(page),
        { keepPreviousData: true }
    )
    const { data: productData, isSuccess: isProSuccess } = useQuery({
        queryKey: 'products',
        queryFn: () => client('products'),
    })

    React.useEffect(() => {
        setElements(elList?.current?.childElementCount)
    }, [data])

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
        <div className='user-table__wrapper'>
            <h2 className='user-section__heading title'>Foydalanuvchilar</h2>
            <table className='user-table'>
                <thead className='user-table__head'>
                    <tr className='user-table__head-tr'>
                        <th className='user-table__head-th user-table__head-th-id'>
                            ID
                        </th>
                        <th className='user-table__head-th user-table__head-th-name'>
                            Ismi
                        </th>
                        <th className='user-table__head-th user-table__head-th-surname'>
                            Familiyasi
                        </th>
                        <th className='user-table__head-th user-table__head-th-profession'>
                            Kasbi
                        </th>
                        <th className='user-table__head-th user-table__head-th-birth'>
                            Tug'ilgan yili
                        </th>
                        <th className='user-table__head-th user-table__head-th-gender'>
                            Jins
                        </th>
                        <th className='user-table__head-th user-table__head-th-region'>
                            Region
                        </th>
                        <th className='user-table__head-th user-table__head-th-score'>
                            Score
                        </th>
                        <th className='user-table__head-th user-table__head-th-score'>
                            Prize
                        </th>
                        <th className='user-table__head-th user-table__head-th-score'>
                            Send Prize
                        </th>
                    </tr>
                </thead>
                <tbody className='user-table__body' ref={elList}>
                    {isSuccess &&
                        data?.map((user) => <SingleUserTr user={user} />)}
                </tbody>
            </table>

            <TableController
                setPage={setPage}
                page={page}
                numberLi={elements}
            />
        </div>
    )
}

export default UserTable
