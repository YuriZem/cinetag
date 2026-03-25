import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo'
import styles from './Player.module.css'
import videos from '../../json/db.json'
import NaoEncontrado from '../NaoEncontrado'
import { useEffect, useState } from 'react'
function Player() {

  const [video, setVideo] = useState()

  const paramentros = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/YuriZem/cinetag-api/videos?id=${paramentros.id}`)
    .then(resposta => resposta.json())
    .then(dados => {
      setVideo(...dados)
    })
  }, [])

  if(!video){
    return <NaoEncontrado></NaoEncontrado>
  }

  return (
    <>
      <Banner imagem="player"></Banner>
      <Titulo>
        <h1>Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </section>

    </>
  )
}

export default Player