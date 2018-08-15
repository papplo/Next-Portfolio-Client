import Head from 'next/head'
import Link from 'next/link'
import globalStyles from '../styles/global'
import styles from '../styles/layout'

export default props => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Portfolio with Sanity and Next.js</title>
    </Head>
    <nav>
      <Link href="/works"><a>Works</a></Link>
      <Link href="/about"><a>About Me</a></Link>
    </nav>
    <div id="main">
      {props.children}
    </div>
    <footer>

    </footer>
    <style jsx>{styles}</style>
    <style jsx global>{globalStyles}</style>
  </div>
)
