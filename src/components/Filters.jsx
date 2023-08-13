import { UseFilters } from '../hooks/UseFilters'

const Filters = () => {
    const {setFilters, filters} = UseFilters()
    const handleChangePrice = (e) => {
       setFilters({...filters, minprice: e.target.value})
    }
  return (
    <div className='box-filter'>
      <div>
        <label htmlFor='filter-price'>Filter by price :   </label>
        <input type='range' min='0' max='2000' onChange={handleChangePrice} value={filters.minprice} />
        <strong>$ {filters.minprice} </strong>
      </div>

      {filters.category !== 'all' && <button className='category'> <button className='close-button' onClick={() => setFilters({...filters, category: 'all'})}>x</button> {filters.category}</button>}
    </div>
  )
}

export default Filters
