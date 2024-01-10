export default (state,action)=>{
    switch(action.type){
        case'DeleteTransaction':
            return{
                ...state,
                transactions:state.transactions.filter(transaction=>transaction.id!==action.payload)
            }
        case'AddTransaction':
           return{
            ...state,
             transactions:[...state.transactions,action.payload]
           }
            
        default:
            return state;
    }
}