import type { AppProps } from 'next/app'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider
} from '@mantine/core'
import dynamic from 'next/dynamic'
import { useLocalStorage } from '@mantine/hooks'
import theme from '../config/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true
  })

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false
})
