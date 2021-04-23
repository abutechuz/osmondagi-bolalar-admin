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

  return (
    <>
      <div className="stats__reg stats-reg">
        <h3 className="stats-reg__title">Region</h3>
        <ul className="stats-reg__list">
          { data?.map((e, i) => (
            <li className="stats-reg__item" key={i}>
              <p className="stats-reg__text">{e?.name}</p>
              <span className="stats-reg__span">{e?.percent}%</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default DashReg;
