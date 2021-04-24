import "./DashAge.scss";
import { useEffect } from "react";
import { useAsync } from "../../hooks/useAsync";
import { client } from "../../utils/api-client";

function DashAge() {
  const { data, isLoading, isError, run } = useAsync();

  useEffect(() => {
    run(client("age"));
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
      <div className="stats__age stats-age">
        <h3 className="stats-age__title">Age</h3>
        <ul className="stats-age__list">
          {data?.map((e, i) => (
            <li className="stats-age__item" key={i}>
              <div className="stats-age__inner">
                <p className="stats-age__text">{e.desc}</p>
                <span className="stats-age__count">{e.percent}%</span>
              </div>
              <span className="stats-age__dio" aria-label="70%" style={{width: e.percent + '%'}}></span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DashAge;
