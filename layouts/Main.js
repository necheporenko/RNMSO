import React from 'react'
import Head from '../components/head'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import '../static/sass/main.sass'

const Home = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head title="Home" />

    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
)

export default Home
