import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import Banner from "../../components/Banner";

function Inicio() {
  return (
    <>
      <Cabecalho></Cabecalho>
      <Banner imagem="home" ></Banner>
      <Inicio>
        <h1>Um lugar para guardar seus videos e filmes</h1>
      </Inicio>
      <Rodape></Rodape>
    </>
    // <></>
  )
}

export default Inicio