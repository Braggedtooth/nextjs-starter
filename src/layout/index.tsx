import { Container, useMantineTheme } from '@mantine/core'
import Head from 'next/head'
import React from 'react'
import { LayoutProps } from '../types/common'

const Index = ({ title, children }: LayoutProps) => {
  const [isMounted, setIsMounted] = React.useState(false)
  React.useEffect(() => {
    setIsMounted(true)
  }, [isMounted])

  return (
    isMounted && (
      <>
        <Head>
          <title>{`Nextapp - ${title}`}</title>
        </Head>
        <div>{children}</div>
      </>
    )
  )
}

export default Index
