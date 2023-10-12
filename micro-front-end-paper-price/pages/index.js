import Head from 'next/head'
import Price from '../components/price'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Microfrontend Demo App 1</title>
        <meta name="description" content="This is an app" />
      </Head>

      <Price />
    </div>
  )
}
