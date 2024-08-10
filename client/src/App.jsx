
import './App.css'
import Blah from './pages/blah'
import { Registration } from './pages/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path={"/register"} element={<Registration />}>
    </Route>
    <Route path={"/profile"} element={<Blah/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
