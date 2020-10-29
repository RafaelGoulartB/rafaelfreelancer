import '../public/style.css'

import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import ThemeContainer from '../contexts/theme/ThemeContainer'

import seoConfig from '../config/seo'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeContainer>
        <DefaultSeo {...seoConfig} />
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  )
}

export default MyApp
