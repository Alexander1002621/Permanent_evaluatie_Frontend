import '@mantine/core/styles.css'
import './index.css'

import {createTheme, MantineProvider} from '@mantine/core'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'

const queryClient = new QueryClient()

const theme = createTheme({
  primaryColor: 'green',
  defaultRadius: 'md',
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <App />
      </MantineProvider>
    </QueryClientProvider>
  </StrictMode>,
)
