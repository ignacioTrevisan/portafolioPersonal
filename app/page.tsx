import PrimerComponente from "./primerComponente/primerComponente";

import SegundoComponente from "./segundoComponente/segundoComponente";
import ProyectosComponente from "./proyectos/proyectos";
import ContactoComponente from "./finalDePagina/finalDePagina";

export default function Home() {
  return (
    <>
      <PrimerComponente />
      <SegundoComponente />
      <ProyectosComponente />
      <ContactoComponente />
    </>
  );
}
