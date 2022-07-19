import '../styles/globals.css'
import Leat from '../components/leat'

function MyApp({ Component, pageProps }) {
  return (
    <Leat>
  <Component {...pageProps} />
  </Leat>
  )
}

export default MyApp;
