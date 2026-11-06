// De CSS van Mantine moet één keer geïmporteerd worden, vóór onze eigen CSS.
import '@mantine/core/styles.css'
import './index.css'

import {createTheme, MantineProvider} from '@mantine/core'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'

// Eén QueryClient voor de hele app: die bewaart de cache van alle TanStack Query-calls.
const queryClient = new QueryClient()

// Het Mantine-thema: hier kies je de hoofdkleur, lettertypes, afrondingen, ...
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
