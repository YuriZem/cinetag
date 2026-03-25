import style from './NaoEncontrado.module.css';

function NaoEncontrado(){
  return (
    <section className={style.container}>
      <h2>Ops!</h2>
      <p>A rota desejada não foi encontrada</p>
    </section>
  )
}

export default NaoEncontrado