import { createContext, useState, useContext} from "react"

export const FavoritosContext = createContext()
FavoritosContext.displayName = "Favoritos";




export default function FavoritosProvider({ children }) {
  const [favoritos, setFavoritos] = useState([])
  
  return (
    <FavoritosContext.Provider value={{favoritos,setFavoritos}}>
      {children}
    </FavoritosContext.Provider>
  )
}


export function useFavoritoContext(){
  const {favoritos, setFavoritos} = useContext(FavoritosContext);


  function adicionarFavorito(novoFavorito){
    console.log('favorito',favoritos)
    console.log('favoritos',novoFavorito)

    const favoritoRepetido = favoritos.some(item => item.id === novoFavorito.id)
  
    console.log('favoritoRepetido',favoritoRepetido)
    let novaLista = [...favoritos];

    if(!favoritoRepetido){
      novaLista.push(novoFavorito);
      return setFavoritos(novaLista)
    }

    novaLista.splice(novaLista.indexOf(novoFavorito), 1);
    return setFavoritos(novaLista)
  }
  return {
    favoritos,
    adicionarFavorito
  }
}