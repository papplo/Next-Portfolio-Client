import Head from 'next/head'
import Link from 'next/link'
import splitStyles from './styles/split'
import reset from './styles/reset'

export default (props) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Portfolio with Sanity and Next.js</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:300,400,500" rel="stylesheet" />
    </Head>

    <div id="main">
      {props.children}
    </div>
    <footer>

    </footer>
    <style jsx global>{reset}</style>
    <style jsx global>{splitStyles}</style>
  </div>
)
