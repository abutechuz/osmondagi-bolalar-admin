import "./DashReg.scss";
import { useEffect } from "react";
import { useAsync } from "../../hooks/useAsync";
import { client } from "../../utils/api-client";

function DashReg() {
  const obj = {
    tashkent: "Toshkent shahri",
    bukhara: "Buxoro viloyati",
  };
  const { data, isLoading, isError, run } = useAsync();

  useEffect(() => {
    run(
      client("regions")
    );
  }, [run]);

  function stil (arg) {
    if (Number(arg) < 25) {
      return ["rgba(254, 0, 0, 0.8)", "rgba(254, 0, 0, 0.2)"]
    } else if (Number(arg) > 25 && Number(arg) < 50) {
      return ["rgba(254, 195, 0, 0.8)", "rgba(254, 195, 0, 0.2)"]
    } else {
      return ["rgba(41, 204, 150, 0.8)", "rgba(41, 204, 150, 0.2)"]
    }
  }

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
