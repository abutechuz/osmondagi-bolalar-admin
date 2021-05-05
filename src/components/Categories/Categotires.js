import React from 'react'
import { useQuery } from 'react-query'
import './categories.scss'
import Container from '../Container/Container'

function Categories() {
    // ================= Categories =================

    const { data: categories, isSuccess } = useQuery({
        queryKey: 'categories',

        queryFn: () =>
            fetch('http://165.227.211.149:5472/categories', {
                method: 'GET',
                headers: {
                    token:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I',
                },
            }).then((data) => data.json()),
    })

    function handleSubmitCategory(evt) {
        evt.preventDefault()

        const {
            category_title,
            category_price,
            category_image,
        } = evt.target.elements

        const formData = new FormData()
        formData.append('category_title', category_title.value.trim())
        formData.append('category_price', category_price.value.trim())
        formData.append('category_image', category_image.files[0])

        fetch('http://165.227.211.149:5472/categories', {
            method: 'POST',
            body: formData,
            headers: {
                token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I',
            },
        }).then(() => {
            alert('Added')
            category_title.value = ''
            category_price.value = ''
            category_image.value = null
        })
    }

    function handleDeleteCategory(evt) {
        const formData = new FormData()
        formData.append('category_id', evt.target.dataset.categorydeleted)

        fetch('http://165.227.211.149:5472/categories', {
            method: 'DELETE',
            body: formData,
            headers: {
                token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I',
            },
        }).then(() => alert('Deleted'))
    }

    // ================ Products ====================
    const { data: products, isSuccess: isSuccessProducts } = useQuery({
        queryKey: 'products',

        queryFn: () =>
            fetch('http://165.227.211.149:5472/products', {
                method: 'GET',
                headers: {
                    token:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I',
                },
            }).then((data) => data.json()),
    })

    function handleProductSubmit(evt) {
        evt.preventDefault()

        const { category_id, product_size } = evt.target.elements

        const formData = new FormData()
        formData.append('category_id', category_id.value.trim())
        formData.append('product_size', product_size.value.trim())

        fetch('http://165.227.211.149:5472/products', {
            method: 'POST',
            body: formData,
            headers: {
                token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I',
            },
        }).then(() => {
            alert('Added')
        })
    }

    function handleDeleteProduct(evt) {
        const formData = new FormData()
        formData.append('product_id', evt.target.dataset.productdeleted)

        fetch('http://165.227.211.149:5472/products', {
            method: 'DELETE',
            body: formData,
            headers: {
                token:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I',
            },
        }).then(() => alert('Deleted'))
    }
    return (
        <section className='categories'>
            <Container>
                <div className='categories__products-wrapper'>
                    <div className='categories__wrapper'>
                        <h2 className='categories__heading'>Kategoriya</h2>

                        <form
                            action='/'
                            method='POST'
                            onSubmit={handleSubmitCategory}>
                            <div className='categories__title-input-wrapper'>
                                <label
                                    htmlFor='category_title'
                                    className='webdash-team__label'>
                                    Kategoriya nomi
                                </label>

                                <input
                                    className='webdash-team__input categories__input'
                                    type='text'
                                    id='category_title'
                                    name='category_title'
                                    placeholder='Osmondagi bolalar futbolkasi'
                                    required
                                />
                            </div>

                            <div className='categories__price-input-wrapper'>
                                <label
                                    htmlFor='category_price'
                                    className='webdash-team__label'>
                                    Narxi
                                </label>

                                <input
                                    className='webdash-team__input categories__input'
                                    type='number'
                                    id='category_price'
                                    name='category_price'
                                    placeholder='65000'
                                    required
                                />
                            </div>

                            <div className='categories__file-input-wrapper'>
                                <label
                                    htmlFor='category_image'
                                    className='webdash-team__label'>
                                    Rasmi
                                </label>

                                <input
                                    className='webdash-team__input categories__file-upload-input'
                                    type='file'
                                    id='category_image'
                                    name='category_image'
                                    placeholder='Osmondagi bolalar futbolkasi'
                                    required
                                />
                            </div>

                            <button className='categories__button'>
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className='categories-result__wrapper'>
                        <h2 className='categories__heading'>
                            Mavjud Kategoriyalar
                        </h2>

                        <table className='orders__table'>
                            <thead>
                                <tr className='orders__table-row'>
                                    <th className='orders__table-column'>
                                        Kategoriya nomi
                                    </th>
                                    <th className='orders__table-column'>
                                        Narxi
                                    </th>
                                    <th className='orders__table-column'>
                                        O'chirish
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {isSuccess &&
                                    categories?.map((category) => (
                                        <tr
                                            className='orders__table-row'
                                            key={category.category_id}>
                                            <td>{category.category_title}</td>
                                            <td>{category.category_price}</td>
                                            <td>
                                                <button
                                                    className='categories__button categories__delete-button'
                                                    data-categorydeleted={
                                                        category.category_id
                                                    }
                                                    onDoubleClick={
                                                        handleDeleteCategory
                                                    }>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='products__wrapper'>
                    <div className='products__input-wrapper'>
                        <h2 className='categories__heading'>Mahsulotlar</h2>

                        <form
                            action='/'
                            method='POST'
                            onSubmit={handleProductSubmit}>
                            <select
                                className='products__select'
                                name='category_id'
                                id='category_id'
                                defaultValue='shablon'
                                required>
                                <option value='shablon' disabled>
                                    Kategoriya turi
                                </option>

                                {isSuccess &&
                                    categories?.map((category) => (
                                        <option
                                            value={category.category_id}
                                            key={
                                                category.category_id +
                                                Math.random()
                                            }>
                                            {category.category_title}
                                        </option>
                                    ))}
                            </select>

                            <select
                                className='size__select'
                                name='product_size '
                                id='product_size'
                                defaultValue='shablon'
                                required>
                                <option value='shablon' disabled>
                                    O'lchami
                                </option>
                                <option value='XS'>XS</option>
                                <option value='S'>S</option>
                                <option value='M'>M</option>
                                <option value='L'>L</option>
                                <option value='XL'>XL</option>
                                <option value='XXL'>XXL</option>
                            </select>

                            <button className='categories__button'>
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className='products__result'>
                        <h2 className='categories__heading'>
                            Mavjud Mahsulotlar
                        </h2>

                        <table className='orders__table'>
                            <thead>
                                <tr className='orders__table-row'>
                                    <th className='orders__table-column'>
                                        Kategoriya turi
                                    </th>
                                    <th className='orders__table-column'>
                                        O'lchami
                                    </th>
                                    <th className='orders__table-column'>
                                        O'chirish
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {isSuccessProducts &&
                                    products?.map((product) => (
                                        <tr
                                            className='orders__table-row'
                                            key={
                                                product.category_id +
                                                Math.random()
                                            }>
                                            <td>{product.category_id}</td>
                                            <td>{product.product_size}</td>
                                            <td>
                                                <button
                                                    className='categories__button categories__delete-button'
                                                    data-productdeleted={
                                                        product.product_id
                                                    }
                                                    onDoubleClick={
                                                        handleDeleteProduct
                                                    }>
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Categories
