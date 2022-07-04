import { Card, Center, Group, Title, Stack, Anchor } from '@mantine/core'
import React from 'react'

const Index = () => {
  return (
    <Center>
      <Stack>
        <Title> Next js Stater template</Title>
        <Group>
          <Anchor href="https://nextjs.org/docs/basic-features/layouts">
            Set up layout
          </Anchor>
          <Anchor href="#">Set up components</Anchor>
        </Group>
      </Stack>
    </Center>
  )
}

export default Index
