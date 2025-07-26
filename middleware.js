import { withLocales } from 'nextra/locales'

export const middleware = withLocales(request => {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png|manifest|_pagefind).*)'
    ]
})