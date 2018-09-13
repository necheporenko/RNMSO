import React from 'react'
import Head from '../components/head'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import '../static/sass/main.sass'

const bodyStyles = {
  position: 'fixed',
  left: '-270px',
  overflow: 'hidden',
  transition: '1s'
}

class Home extends React.Component {
  state = {
    isOpenMobileMenu: false
  }

  toggleMobileMenu = () => {
    this.setState({ isOpenMobileMenu: !this.state.isOpenMobileMenu })
  }

  render() {
    const { children, title = 'RNYSO Главная' } = this.props;
    const { isOpenMobileMenu } = this.state;
    return (
      <div className="wrapper" style={isOpenMobileMenu ? bodyStyles : {}}>
        <Head title={title} />

        <Header toggleMobileMenu={this.toggleMobileMenu} />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Home
