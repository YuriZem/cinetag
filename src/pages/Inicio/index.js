import Cabecalho from "../../components/Cabecalho";
import Rodape from "../../components/Rodape";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";

function Inicio() {
  return (
    <>
      <Cabecalho></Cabecalho>
      <Banner imagem="home" ></Banner>
      <Titulo children={
        <h1>Um lugar para guardar seus videos e filmes</h1>
      }>
      </Titulo>
      <Card id='1' titulo='teste 3'></Card>
      <Rodape></Rodape>
    </>
    // <></>
  )
}

export default Inicio