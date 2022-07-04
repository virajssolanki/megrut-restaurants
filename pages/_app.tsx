import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from './component/Header'
import Footer from './component/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return( 
      <Component {...pageProps} />
    )
}

export default MyApp
