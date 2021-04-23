import "./DashProf.scss";
import "../DashReg/DashReg.scss"

function DashProf() {
  return (
    <>
      <div className="stats__prof stats-prof">
        <h3 className="stats-prof__title">Profassion</h3>

        <ul className="stats-prof__list">
          <li className="stats-reg__item">
            <p className="stats-reg__text">Tashkent</p>
            <span className="stats-reg__span">10%</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DashProf