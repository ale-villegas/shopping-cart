import { createContext, useState } from 'react'

// import { reducer } from './reducer'

export const FiltersContext = createContext()

export function FiltersProvider({children}) {
  const [filters, setFilters] = useState({
    minprice: 0,
    category: 'all'

})

   // const [state, dispatch] = useReducer(reducer, mock.products)

    return (

      <FiltersContext.Provider value={{setFilters, filters}}>

        {children}
      </FiltersContext.Provider>

    )
}
