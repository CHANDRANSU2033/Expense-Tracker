import React ,{useState, useContext, useEffect}from 'react'
import { GlobalContext } from '../context/GlobalState';
const AddTransactoin = () => {

    const [text , setText] = useState("");
    const [amount , setAmount] = useState();

    const {addTransactions,saveTransactions,getData} = useContext(GlobalContext);

    useEffect(() =>{
      getData()
    },[])
    const onSubmit = (e)=>{
      e.preventDefault();
      if(text.string === 0 || amount === undefined )alert('Invalid Input')
      else{
        console.log(amount)
      const newTransactions ={
          id : Math.floor(Math.random()*100000000),
          text,
          amount: +amount
      }
      addTransactions(newTransactions) 

    }

    }

  return (
    <>
        <h3>Add new transaction</h3>
      <form onSubmit = {onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value = {text} onChange = {(e) =>{
            setText(e.target.value)
          }} placeholder="Enter text..." />
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount <br />
                (negative - expense, positive - income)
            </label>
          <input type="number" value = {amount} onChange = {(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      <button className="btn" onClick = {()=>{ saveTransactions();alert("Saved!") }}>save</button>
    </>
  )
}

export default AddTransactoin