import { createContext, useState } from 'react'

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {
        console.log(id)
    },
    removeFavorite: (id) => {
        console.log(id)
    },
})

function FavoritesContextProvider({children}) {
    const [favoriteMealsIds, setFavoriteMealsIds] = useState([]);

    function addFavorite(id) {
        setFavoriteMealsIds((current) => [...current, id])
    }

    function removeFavorite(id) {
        setFavoriteMealsIds((current) => current.filter((mealId) => mealId !== id))
    }

    const value = {
        ids: favoriteMealsIds,
        addFavorite,
        removeFavorite,
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;