import Regi from './pages/regi'
import {Blah as OurEcsPage } from './pages/blah'
import { Registration } from './pages/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path={"/register"} element={<Regi />}>
    </Route>
    <Route path={"/profile"} element={<OurEcsPage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
