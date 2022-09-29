import Navbar from '../components/Navbar'
import '../styles/globals.css'
import Home from '../pages/index'

function MyApp({ Component, pageProps }) {
  return(
    <div>
    <Navbar/>
    <Home/>
    </div>
  )
}

export default MyApp
