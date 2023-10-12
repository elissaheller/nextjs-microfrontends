import Head from 'next/head'
import dynamic from "next/dynamic";

const RemoteColors = dynamic(
    () => import("app1/colors"),
    { ssr: false }
)

const RemotePrice = dynamic(
    () => import('app2/price'),
    { ssr: false }
)


export default function Home() {
  return (
    <div>
      <Head>
        <title>Microfrontends Demo</title>
        <meta name="description" content="Demo for Microfrontends using Module Federation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Hello, I'm content from the shell app.
      </main>

        <RemoteColors />
        <RemotePrice />
    </div>
  )
}
