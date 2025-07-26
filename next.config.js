const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  darkMode: false,
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en'
  }
})
