import React , { useContext }from 'react'
import { GlobalContext } from '../context/GlobalState';


const Transaction = ({val}) => {

  const {deleteTransactions} = useContext(GlobalContext)
  


  let sign = (val.amount > 0) ? '+' : '-';


  return (
    <>
        <li className = {(val.amount < 0) ? 'minus' : 'plus'}>
            {val.text} <span>{sign + '$' + Math.abs(val.amount)}</span><button onClick = {() => deleteTransactions(val.id)}   className='delete-btn'>x</button>
        </li>
    </>
  )
}

export default Transaction