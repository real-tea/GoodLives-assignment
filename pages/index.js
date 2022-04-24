import Head from 'next/head'

// Sections
import Hero from '../components/Hero';
import Services from '../components/Services';
import Management from '../components/Management';
import TrustUs from '../components/TrustUs';


export default function Home({ hero }) {

  return (
    <>
      <Head>
        <title>GoodLives - How it Works</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <Services />
      <Management />
      <TrustUs />


    </>
  )
}
