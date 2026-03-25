
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./pages/Inicio"
import Favoritos from "./pages/Favoritos"
import Player from "./pages/Player"
import NaoEncontrado from "./pages/NaoEncontrado"
import PaginaBase from "./pages/PaginaBase/inde"
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="favoritos" element={<Favoritos></Favoritos>}></Route>
          <Route path=":id" element={<Player></Player>}></Route>
          <Route path="*" element={<NaoEncontrado></NaoEncontrado>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter