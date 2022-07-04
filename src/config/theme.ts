import { MantineThemeOverride } from '@mantine/core'

const theme = (theme: MantineThemeOverride): MantineThemeOverride => {
  const { colorScheme, ...rest } = theme
  return {
    colorScheme: colorScheme,
    ...rest
  }
}

export default theme
