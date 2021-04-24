import "./DashProf.scss";
import "../DashReg/DashReg.scss";
import { useEffect } from "react";
import { useAsync } from "../../hooks/useAsync";
import { client } from "../../utils/api-client";

function DashProf() {
  const { data, isLoading, isError, run } = useAsync();

  useEffect(() => {
    run(client("profession"));
  }, [run]);

  function stil (arg) {
    if (Number(arg) < 10) {
      return ["rgba(254, 0, 0, 0.8)", "rgba(254, 0, 0, 0.2)"]
    } else if (Number(arg) > 10 && Number(arg) < 40) {
      return ["rgba(254, 195, 0, 0.8)", "rgba(254, 195, 0, 0.2)"]
    } else {
      return ["rgba(41, 204, 150, 0.8)", "rgba(41, 204, 150, 0.2)"]
    }
  }

  return (
    <>
      <div className="stats__prof stats-prof">
        <h3 className="stats-prof__title">Profassion</h3>
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

export default DashProf;
