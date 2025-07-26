import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'

const config: DocsThemeConfig = {
  logo: <span>Devil App Builder</span>,
  project: {
    link: 'https://github.com/muyoungko/dab-document',
  },
  docsRepositoryBase: 'https://github.com/muyoungko/dab-document/blob/master',
  footer: {
    text: <span>© 2024 Mondayless, Inc</span>,
  },
  darkMode: true,
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'ko', text: '한국어' }
  ],
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const url =
      'https://document.devil-app-builder.com' + (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
    
    return (
      <>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={'Documentation - Devil App Builder'} />
        <meta
          property="og:description"
          content={'Devil App Builder Document. Native Appliction Builder. Android and iOS cross platform. Sketch and Figma converting'}
        />
      </>
    )
  },
}

export default config

