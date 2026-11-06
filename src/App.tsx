import type {FunctionComponent} from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router'
import Layout from './components/layout/Layout.tsx'
import ClubsPage from './pages/ClubsPage.tsx'
import FavoritesPage from './pages/FavoritesPage.tsx'
import HomePage from './pages/HomePage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'

// Alle routes van de app. De Layout is de "ouder": die toont de navigatie,
// en via <Outlet /> wordt de pagina van de huidige route erin getoond.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {index: true, element: <HomePage />},
      {path: 'clubs', element: <ClubsPage />},
      {path: 'favorieten', element: <FavoritesPage />},
      {path: '*', element: <NotFoundPage />},
    ],
  },
])

const App: FunctionComponent = () => {
  return <RouterProvider router={router} />
}

export default App
