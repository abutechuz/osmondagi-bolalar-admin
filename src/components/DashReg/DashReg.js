import "./DashReg.scss";
import { useEffect } from "react";
import { useAsync } from "../../hooks/useAsync";
import { client } from "../../utils/api-client";
import { stil } from "../../hooks/useDio"

function DashReg() {
  const { data, isLoading, isError, run } = useAsync();

  useEffect(() => {
    run(
      client("regions")
    );
  }, [run]);

  return (
    <>
      <div className="stats__reg stats-reg">
        <h3 className="stats-reg__title">Region</h3>
        <ul className="stats-reg__list">
          { data?.map((e, i) => (
            <li className="stats-reg__item" key={i} style={{background: stil(e?.percent)[1]}} >
              <p className="stats-reg__text">{e?.name}</p>
              <span className="stats-reg__span"
              style={{background: stil(e?.percent)[0]}} 
                >{e?.percent}%</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default DashReg;
