import type { AppProps } from 'next/app'
import '../styles/globals.css'
import {
  Header,
  Footer,
  LeftBar
} from '../components'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className='mainSection'>
        <LeftBar />
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
