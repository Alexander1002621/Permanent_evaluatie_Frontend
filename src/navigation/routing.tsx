import type {FunctionComponent} from 'react'
import {Route, Routes} from 'react-router'
import PageNotFound from '../pages/404/PageNotFound.tsx'
import Clubs from '../pages/clubs/clubs.tsx'
import Favorites from '../pages/favorites/favorites.tsx'
import Home from '../pages/home/home.tsx'

const Routing: FunctionComponent = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Home />} />
      <Route path={'/clubs'} element={<Clubs />} />
      <Route path={'/favorieten'} element={<Favorites />} />
      <Route path={'*'} element={<PageNotFound />} />
    </Routes>
  )
}

export default Routing
