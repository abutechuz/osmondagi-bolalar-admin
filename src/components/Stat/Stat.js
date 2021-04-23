import "./Stat.scss"
import Container from "../Container/Container"
import DashReg from "../DashReg/DashReg"

function Stat () {
  return (
    <>
      <section className="stats">
        <h2 className="visually-hidden">section</h2>
        <Container>
          <DashReg />
        </ Container>
      </section>
    </>
  );
}
export default Stat