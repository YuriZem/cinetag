import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import Banner from "../../components/Banner";
import Card from "../../components/Card";

function Inicio() {
  return (
    <>
      <Cabecalho></Cabecalho>
      <Banner imagem="home" ></Banner>
      <Inicio>
        <h1>Um lugar para guardar seus videos e filmes</h1>
      </Inicio>
      <Card id='1' titulo='teste 3'></Card>
      <Rodape></Rodape>
    </>
    // <></>
  )
}

export default Inicio