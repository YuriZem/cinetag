import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo'
import styles from './Favoritos.module.css'
import Card from '../../components/Card'
function Favoritos() {
  return (
    <>
      <Banner image='favoritos'></Banner>
      <Titulo> 
        <h1>Meus Favoritos</h1>
      </Titulo>

      <section className={styles.container}>
        <Card></Card>
      </section>
    </>
  )
}

export default Favoritos