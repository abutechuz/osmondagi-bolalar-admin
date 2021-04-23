import "./DashAge.scss"
import { useEffect } from "react";
import { useAsync } from "../../hooks/useAsync";
import { client } from "../../utils/api-client";

function DashAge () {

  const { data, isLoading, isError, run } = useAsync();

  useEffect(() => {
    run(
      client("age").then((data) => {
        console.log(data);
      })
    );
  }, [run]);

  return (
    <>
      <div className="stats__age stats-age">
        <h3 className="stats-age__title">Age</h3>
        <ul className="stats-age__list">
          <li className="stats-age__item">
            <div className="stats-age__inner">
              <p className="stats-age__text">0 - 16 yosh</p>
              <span className="stats-age__count">70%</span>
            </div>
            <span className="stats-age__dio" aria-label="70%"></span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DashAge