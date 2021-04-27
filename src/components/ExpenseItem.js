import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const expenseDate = props.date
  const expenseMonth = expenseDate.toLocaleString('en-US', { month: 'long' })
  const expenseYear = expenseDate.toLocaleString('en-US', { day: '2-digit' })
  const expenseDay = expenseDate.getFullYear()
  const expenseTitle = props.title
  const expenseAmount = props.amount

  return (
    <div className='expense-item'>
      <div>
        <div>{expenseMonth}</div>
        <div>{expenseYear}</div>
        <div>{expenseDay}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
