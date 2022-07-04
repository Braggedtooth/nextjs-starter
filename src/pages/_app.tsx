import type { AppProps } from 'next/app'
import {
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider
} from '@mantine/core'
import { getCookie, setCookie } from 'cookies-next'
import theme from '../config/theme'
import { NextPageWithLayout } from '../types/common'
import { useState } from 'react'
import { GetServerSidePropsContext } from 'next'

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  initColorScheme: ColorScheme
}

const MyApp = ({
  Component,
  pageProps,
  initColorScheme
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  const [colorScheme, setColorScheme] = useState<ColorScheme>(initColorScheme)

  const toggleColorScheme = () => {
    const nextColorScheme = colorScheme === 'dark' ? 'light' : 'dark'
    setColorScheme(nextColorScheme)
    // when color scheme is updated save it to cookie

    setCookie('color-scheme', nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30
    })
  }
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={theme({ colorScheme: colorScheme })}
      >
        <Container
          sx={(theme) => ({
            height: '100vh',
            width: '100vw'
          })}
        >
          {getLayout(<Component {...pageProps} />)}
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default MyApp

MyApp.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => {
  const cookie = getCookie('color-scheme', ctx)
  // get color scheme from cookie
  return {
    initColorScheme: cookie ?? 'light'
  }
}

  

