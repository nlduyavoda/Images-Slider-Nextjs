import React, { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import 'semantic-ui-css/semantic.min.css'

interface ErrorBoundaryProps {
  children: ReactNode
}

function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
    if (hasError) {
      // You can log the error or handle it in any way you prefer
      console.error('Something went wrong.')
    }
  }, [hasError])

  if (hasError) {
    // You can customize the error message or UI here
    return <div>Something went wrong.</div>
  }

  return <React.Fragment>{children}</React.Fragment>
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const queryClient = new QueryClient()
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ErrorBoundary>,
  )
}

export default MyApp
