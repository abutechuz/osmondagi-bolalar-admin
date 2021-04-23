import "./DashProf.scss";
import "../DashReg/DashReg.scss"
import { useEffect } from "react";
import { useAsync } from "../../hooks/useAsync";
import { client } from "../../utils/api-client";

function DashProf() {

  const { data, isLoading, isError, run } = useAsync();

  useEffect(() => {
    run(
      client("profession").then((data) => {
        console.log(data);
      })
    );
  }, [run]);

  return (
    <>
      <div className="stats__prof stats-prof">
        <h3 className="stats-prof__title">Profassion</h3>
        <ul className="stats-prof__list">
          <li className="stats-prof__item">
            <p className="stats-prof__text">It tadbirkor</p>
            <span className="stats-prof__span">10%</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DashProf