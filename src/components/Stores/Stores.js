import { useRef } from 'react'
import { useQuery } from 'react-query'
import './Store.scss'

function Stores() {

    const store_name = useRef()
    const store_addres = useRef()
    const store_phonenumber = useRef()
    const store_map_address = useRef()
    const deleteBtn = useRef()

    const { data, isSuccess } = useQuery({
        queryKey: 'store',
        
        queryFn: () =>
        fetch("http://165.227.211.149:5472/stores", {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.                                   eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I",
        }).then((data) => data.json()),
    })

    function storeAdd(evt) {
        evt.preventDefault();
        const formData = new FormData();
        formData.append("store_name", store_name.current.value);
        formData.append("store_address", store_addres.current.value);
        formData.append("store_phonenumber", store_phonenumber.current.value);
        formData.append("store_map_address", store_map_address.current.value);

        fetch("http://165.227.211.149:5472/stores", {
            method: "POST",                        
            body: formData,
            headers: {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I",
            }            
        }).then(() => alert("Store Added"))
    }

    async function storeDeleted(e) {
        const formData = new FormData();
        formData.append("store_id", e.target.dataset.sid);
        await fetch(`http://165.227.211.149:5472/stores`, {
          method: "DELETE",
          body: formData,
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMDYkYWxpb3lLRkVVUWd5VzJ2S2MwUXc3dW1vOVZIWjFDa0U1UUFmTkliT0V0Wi9iSUMvRzZLRi4iLCJpYXQiOjE2MjAwMjQzMDZ9.ifbelGdLxQ3Hg_RbtT3RIpAw9V1MGLBpDkrrnh1zh-I",
          },
        }).then(() => alert("Store Deleted"));
      }

    return (
        <>
            <section className="stores">
                <form className="store__form" action="/" method="POST" autoComplete="off" onSubmit={storeAdd}>
                    <input className="store__input speaker__input" ref={store_name} type="text" name="store_name" placeholder="Store name" required/>
                    <input className="store__input speaker__input" ref={store_addres} type="text" name="store_addres" placeholder="Store addres" required/>
                    <input className="store__input speaker__input" ref={store_phonenumber} type="tel" name="store_phonenumber" placeholder="Store phonenumber" required/>
                    <input className="store__input speaker__input" ref={store_map_address} type="text" name="store_map_address" placeholder="Store map addres" required/>
                    <button className="store__btn web-intro__btn" type="submit">Send</button>
                </form>

                <ul className="stroes__list">
                    {
                        isSuccess && data.map(e => (
                        <li className="store__item">
                            <div className="store__inner">
                            <h3 className="store__title">{e.store_name}</h3>
                            <button
                            ref={deleteBtn}
                                className="store__item-btn"
                                data-sid={e.store_id }
                                onDoubleClick={storeDeleted}
                            ></button>
                            </div>
                            <address className="store__addres">{e.store_addres}</address>
                            <div className="store__item-inner">
                                <a className="store__link-tel" href={`tel:`+e.store_phonenumber} target="blank">{e.store_phonenumber}</a>
                                <a className="store__link-map" href={e.store_map_address} target="blank">Xaritadan ko’rish</a>
                            </div>
                        </li>
                        ))
                    }
                </ul>
            </section>
        </>
    );
}

export default Stores
