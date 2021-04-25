import './DashProf.scss'
import '../DashReg/DashReg.scss'
import { useEffect } from 'react'
import { useAsync } from '../../hooks/useAsync'
import { client } from '../../utils/api-client'
import { stil } from "../../hooks/useDio"

function DashProf() {
    const { data, isLoading, isError, run } = useAsync()

    useEffect(() => {
        run(client('profession'))
    }, [run])

  return (
    <>
      <div className="stats__prof stats-prof">
        <h3 className="stats-prof__title">Profession</h3>
        <ul className="stats-prof__list">
          {data?.map((e, i) => (
            <li className="stats-prof__item" key={Math.random()} style={{background: stil(e?.percent)[1]}} >
              <p className="stats-prof__text">{ e.text }</p>
              <span className="stats-prof__span" style={{background: stil(e?.percent)[0]}}>{e.percent}%</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DashProf
