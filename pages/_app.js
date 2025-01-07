import Head from 'next/head'
import '@styles/globals.css'
import i18n from '../utils/i18n';
import { I18nextProvider } from 'react-i18next';
import LanguagePopup from '@components/LanguagePopup'

function Application({ Component, pageProps }) {
  return (
    <I18nextProvider i18n={i18n}>
      <Head>
        <title>De Honde Knapper</title>
        <link rel="icon" href="/icons/dog.png" />
      </Head>
      <LanguagePopup/>
      <Component {...pageProps} />
    </I18nextProvider>
  )
}

export default Application
