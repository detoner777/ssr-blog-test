import Head from 'next/head'
import Wrapper from './Wrapper'
import Nav from 'components/Nav'
import Footer from 'components/Footer'

export default ({ children, title = 'SSR blog' }) => (
  <Wrapper>
    <Head>
      <title>{title}</title>
    </Head>
    <header>
      <Nav />
    </header>

    <main>{children}</main>

    <Footer>
      Created by <a href='https://github.com/detoner777'>Alexey Lysenko</a>
    </Footer>
  </Wrapper>
)
