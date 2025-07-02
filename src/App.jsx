import './css/App.css'
import NavBar from'./components/NavBar'
import Home from './pages/Home'
import Music from './pages/Music'
import Shop from './pages/Shop'
import LetsTalk from './pages/LetsTalk'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

function App() {

  return (
   <div>
    <NavBar/>
    <main className='main-content'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='music' element={<Music/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path ='letsTalk' element={<LetsTalk/>}/>
        <Route path='cart' element={<LetsTalk/>}/>
      </Routes>
    </main>
    <Footer/>
   </div>
  );
}

export default App
