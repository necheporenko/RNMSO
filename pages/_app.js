import App, { Container } from 'next/app'
import { I18n as I18nR } from 'react-i18next'
import i18n from '../i18n'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <I18nR ns='common' i18n={(pageProps && pageProps.i18n) || i18n} wait>
          {
            (t) => (
              <Component {...pageProps} />
            )
          }
        </I18nR>
      </Container>
    )
  }
}
