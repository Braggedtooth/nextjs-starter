import { NextPage } from 'next/types'

export type NextPageWithLayout<T = any> = CustomNextPage<T> & {
  getLayout: (page: JSX.Element) => JSX.Element
}

export type CustomNextPage<P = {}, IP = P> = NextPage<P, IP>

export type LayoutProps = {
  title: string
  children: React.ReactNode
}
