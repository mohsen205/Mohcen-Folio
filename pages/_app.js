import { useEffect } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.min.js') : null
  })
  return <Component {...pageProps} />
}

export default MyApp
