import React from 'react'

import './ExpensesFilter.css'

const ExpensesFilter = (props) => {
  /* props = {
    onFilterYear - function,
    filteredYear - string,
  }*/
  const onFilterYear = props.onFilterYear
  const filteredYear = props.filteredYear

  const dropdownChangeHandler = (event) => {
    onFilterYear(event.target.value)
  }

  return (
    <div className='expensesFilter'>
      <label className='expensesFilter__label'>YEAR:</label>
      <select value={filteredYear} onChange={dropdownChangeHandler}>
        <option value='2022'>2022</option>
        <option value='2021'>2021</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
      </select>
    </div>
  )
}

export default ExpensesFilter
