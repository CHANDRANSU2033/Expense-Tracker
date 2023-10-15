import React from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
	const {transactions} = React.useContext(GlobalContext)

	const amount = transactions.map((ele) => ele.amount )
	const total = amount.reduce((acc,ele) => acc + ele,0).toFixed(2);
  return (
    <>
        <h4>Your Balance</h4>
        <h1 >${total}</h1>
    </>
  )
}

export default Balance