import '@mantine/core/styles.css'
import './index.css'

import {createTheme, MantineProvider} from '@mantine/core'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router'
import Layout from './components/layout.tsx'
import FavoritesProvider from './context/favoritesContext.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: import.meta.env.PROD,
    },
  },
})

const theme = createTheme({
  primaryColor: 'green',
  defaultRadius: 'md',
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <FavoritesProvider>
          <BrowserRouter>
            <Layout />
          </BrowserRouter>
        </FavoritesProvider>
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>,
)
