import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

const IncomeExpenses = () => {
	const {transactions } = useContext(GlobalContext)
	const amount = transactions.map((ele) => ele.amount)
	const income = amount.filter((ele) => ele > 0).reduce((acc,am)=> acc + am,0).toFixed(2)
	const expense = amount.filter((ele) => ele < 0).reduce((acc,am) => acc + am,0).toFixed(2)
  return (
    <>
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${Math.abs(expense)}</p>
            </div>
        </div>
    </>
  )
}

export default IncomeExpenses