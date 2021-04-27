import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const expenseMonth = props.expenseDate.toLocaleString('en-US', { month: 'long' })
  const expenseYear = props.expenseDate.toLocaleString('en-US', { day: '2-digit' })
  const expenseDay = props.expenseDate.getFullYear()

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{expenseMonth}</div>
      <div className='expense-date__year'>{expenseYear}</div>
      <div className='expense-date__day'>{expenseDay}</div>
    </div>
  )
}

export default ExpenseDate
