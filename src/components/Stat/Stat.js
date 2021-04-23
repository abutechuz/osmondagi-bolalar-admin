import "./Stat.scss"
import Container from "../Container/Container"
import DashReg from "../DashReg/DashReg"
import DashAge from "../DashAge/DashAge"

function Stat () {
  return (
    <>
      <section className="stats">
        <h2 className="visually-hidden">section</h2>
        <Container>
          <div className="stats__inner">
            <DashReg />
            <DashAge />
          </div>
          
        </ Container>
      </section>
    </>
  );
}
export default Stat