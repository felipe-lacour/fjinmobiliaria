import Divisor from "../components/Divisor";
import Equipo from "../components/Equipo";
import Footer from "../components/Footer";
import { Header2 } from "../components/Header2";
import { NordeltaImg } from "../components/NordeltaImg";
import Proyecto from "../components/Proyecto";
import { SectionVenta } from "../components/SectionVenta";

export function Home () {
  return(
    <div className="App">
      <Header2/>
      <NordeltaImg/>
      <SectionVenta/>
      <Equipo/>
      <Divisor mensaje={'Proyectos'}/>
      <Proyecto/>
      <Footer/>
    </div>
  )
}