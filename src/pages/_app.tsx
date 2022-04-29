import type { AppProps } from 'next/app'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  MantineThemeOverride
} from '@mantine/core'
import dynamic from 'next/dynamic'
import { useLocalStorage } from '@mantine/hooks'
import { NotificationsProvider } from '@mantine/notifications'
import { RecoilRoot } from 'recoil'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true
  })
  const customTheme: MantineThemeOverride = {
    colorScheme,
    colors: {
      primary: [
        '#e2fbf7',
        '#c3ece4',
        '#a0ded3',
        '#7cd1c1',
        '#5ac3af',
        '#41aa96',
        '#318575',
        '#215f53',
        '#0f3932',
        '#001511'
      ],
      secondary: [
        '#dafffb',
        '#affef0',
        '#80fbe5',
        '#52fadb',
        '#29f8d1',
        '#17dfb7',
        '#05ad8f',
        '#007c66',
        '#004b3d',
        '#001b13'
      ]
    },
    loader: 'bars',
    fontFamily: 'Poppins, sans-serif',
    primaryColor: 'primary',
    breakpoints: {
      xs: 576,
      sm: 768,
      md: 992,
      lg: 1200,
      xl: 1400
    }
  }

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={customTheme}
          >
            <NotificationsProvider zIndex={1200}>
              <Component {...pageProps} />
            </NotificationsProvider>
          </MantineProvider>
        </ColorSchemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false
})
