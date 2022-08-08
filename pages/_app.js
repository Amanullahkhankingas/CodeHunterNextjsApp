import Navbar from '../component/Navbar'
import '../styles/globals.css'
// import'../styles/style.css'

function MyApp({ Component, pageProps }) {
  return <>
        <Navbar/>
        <Component {...pageProps} />
  </>
}

export default MyApp
