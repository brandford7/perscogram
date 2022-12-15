import Head from 'next/head'
import { Header, Midsection, Sidebar } from '../components'



 

export default function Home() {
  return (
    <>
      <Head>
        <title>Perscogram</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex  w-full h-screen text-green-500 ">
        <header><Header/></header>
        <aside>
          <Sidebar />
        </aside>
        <main className="flex  mx-auto">
          <Midsection />
        </main>
      </div>
    </>
  );
}
