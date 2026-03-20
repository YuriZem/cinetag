
import{BrowserRouter, Route, Routes} from "react-router-dom"
import Inicio from "./pages/Inicio"
function AppRouter(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/inicio"></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter