import { useContext } from 'react'
import { FiltersContext } from '../context/FiltersContext'

export const UseFilters = () => {
const {filters, setFilters} = useContext(FiltersContext)

        const filteredProducts = (products) => {
            return products.filter(product => {
             return (product.price >= filters.minprice && (filters.category === 'all' || product.category === filters.category))
            })
          }

          const selectCategory = (category) => {
            setFilters({...filters, category: category})
          }

      return { filteredProducts, setFilters, filters, selectCategory }
}
