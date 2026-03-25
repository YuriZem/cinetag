import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
import styles from './inicio.module.css'

function Inicio() {


  const [videos, setVideos] = useState([])

  useEffect(() => {

    fetch('https://my-json-server.typicode.com/YuriZem/cinetag-api/videos')
    .then(resposta => resposta.json())
    .then(dados => {
      setVideos(dados)
    })
  }, [])

  return (
    <>
      <Banner imagem="home" ></Banner>
      <Titulo children={
        <h1>Um lugar para guardar seus videos e filmes</h1>
      }>
      </Titulo>
      {/* <Card id='1' titulo='teste 3'></Card> */}

      <section className={styles.container}>
        {videos.map((video) => {
          return  <Card{...video} key={video.id}></Card>
        })}
      </section>
    </>
    // <></>
  )
}

export default Inicio