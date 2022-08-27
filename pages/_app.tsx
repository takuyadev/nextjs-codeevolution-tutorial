import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from 'components/header';
import Footer from 'components/footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)

  }
  return <>
  <Head>
    <title>Next.js Tutorial</title>
    <meta name="description" content="Refresh and learning new things about Next.js"/>
  </Head>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
