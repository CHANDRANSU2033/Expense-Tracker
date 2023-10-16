export default (state, action) =>{
    switch(action.type){
        case 'DELETE_TRANSACTON':
                return{
                    transactions : state.transactions.filter((ele) =>
                        ele.id !== action.just
                    )  
                }
                break;
            case 'ADD_TRANSACTON':
                console.log(state.transactions)
                return{
                    
                    transactions : [  ...state.transactions,action.just ]
                    
                }
                break;
            case 'get':
                return{
                    transactions : action.just
                }

        default :
            return state;
    }
}