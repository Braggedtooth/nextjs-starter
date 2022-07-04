import {
  Center,
  Title,
  Stack,
  Paper,
  Badge,
  Text,
  Button,
  useMantineColorScheme
} from '@mantine/core'
import { GetStaticProps } from 'next/types'
import React from 'react'
import Layout from '../layout'
import { NextPageWithLayout } from '../types/common'

interface props {
  test: string
}
const Index: NextPageWithLayout<props> = ({ test }: props) => {
  const { toggleColorScheme } = useMantineColorScheme()

  return (
    <Center>
      <Stack>
        <Title> Next js Stater template</Title>
        <Paper p="lg" shadow="lg">
          <Text>Type Safe Layouts with custom nextpage and layout </Text>
          <Badge>{test}</Badge>
        </Paper>
        <Paper p="lg" shadow="lg">
          <Text>Toggle Light and Dark Theme </Text>
          <Button onClick={() => toggleColorScheme()}> {test}</Button>
        </Paper>
      </Stack>
    </Center>
  )
}

export default Index

Index.getLayout = (page) => <Layout title="Home">{page} </Layout>
export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      test: 'test'
    }
  }
}
