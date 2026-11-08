import {createContext, type FunctionComponent, type PropsWithChildren, useState} from 'react'

interface IFavoritesContext {
  favorites: number[]
  toggleFavorite: (id: number) => void
}

export const FavoritesContext = createContext<IFavoritesContext>({
  favorites: [],
  toggleFavorite: () => {},
})

const FavoritesProvider: FunctionComponent<PropsWithChildren> = ({children}) => {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number): void => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favorite => favorite !== id))
    } else {
      setFavorites([...favorites, id])
    }
  }

  return <FavoritesContext.Provider value={{favorites, toggleFavorite}}>{children}</FavoritesContext.Provider>
}

export default FavoritesProvider
