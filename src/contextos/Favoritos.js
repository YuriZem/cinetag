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
  const {favorito, setFavorito} = useContext(FavoritosContext);

  function adicionarFavorito(novoFavorito){
    const favoritoRepetido = favorito.some(item => item.id === novoFavorito)
  
    let novaLista = [...favorito];

    if(!favoritoRepetido){
      novaLista.push(novoFavorito);
      return setFavorito(novaLista)
    }

    novaLista.splice(novaLista.indexOf(novoFavorito), 1);
    return setFavorito(novaLista)
  }
  return {
    favorito,
    adicionarFavorito
  }
}