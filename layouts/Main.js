import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Head from '../components/head'
import Header from '../components/organisms/Header'
import Footer from '../components/organisms/Footer'
import '../static/sass/main.sass'

const bodyStyles = {
  position: 'fixed',
  transition: '3s all ease',
  width: '100%'
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
      <div className={isOpenMobileMenu ? 'wrapper body-menu' : 'wrapper'} style={isOpenMobileMenu ? bodyStyles : { width: '100%' }}>
        <Head title={title} />

        <ReactCSSTransitionGroup
          transitionName="react-nav-anim"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <Header toggleMobileMenu={this.toggleMobileMenu} />
        </ReactCSSTransitionGroup>
        <main>
          {children}
        </main>
        <Footer />
      </div>
    )
  }
}

export default Home
