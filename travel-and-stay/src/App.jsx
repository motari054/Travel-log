import './app.css'
import { Navbar } from './components/Navbar/Navbar'
import { Home } from './components/Home/Home'
import { Popular } from './components/Popular/Popular'
import { Offers } from './components/Offers/Offers'
import { About } from './components/About/About'
import { Blog } from './components/Blog/Blog'
import { Footer } from './components/Footer/Footer'


export default function App(){
  return (
    <>
    <Navbar/>
    <Home/>
    <Popular/>
    <Offers/>
    {/* <About/>
    <Blog/>
    <Footer/> */}
    </>
  )
}