const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  i18n: {
    locales: ['en-US', 'ko-KR'],
    defaultLocale: 'en-US',
  },
  darkMode: false,
})

module.exports = withNextra()
