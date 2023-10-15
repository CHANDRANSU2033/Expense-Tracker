import React , {createContext, useReducer} from 'react';
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
	transactions : [
		{ id: 1, text: 'Flower', amount: -20 },
		{ id: 2, text: 'Salary', amount: 300 },
		{ id: 3, text: 'Book', amount: -10 },
		{ id: 4, text: 'Camera', amount: 150 }
	]
}

//Create Context

export const GlobalContext = createContext(initialState);

// provdie components


export const GlobalProvider = ({children}) =>{
	const [state,dispatch] = useReducer(AppReducer,initialState)

	// Actions
	const deleteTransactions = (id) =>{
		dispatch({
			type : 'DELETE_TRANSACTON',
			just : id
		})
	}
	const addTransactions = (transaction)=>{
		dispatch({
			type : 'ADD_TRANSACTON',
			just : transaction
		})
	}

	const saveTransactions = ()=>{
		localStorage.setItem('datakeys',JSON.stringify(state.transactions) )
	} 

	const getData = ()=>{
		const paisa = localStorage.getItem('datakeys');
		const required = JSON.parse(paisa);
		console.log(paisa)
		dispatch({
			type : 'get',
			just : required
		})
	}


	return (
		<GlobalContext.Provider value = {{
			transactions : state.transactions,
			deleteTransactions,
			addTransactions,
			saveTransactions,
			getData
		}}>
			{children}
		</GlobalContext.Provider>
	)
	 
}


