import { useContext } from 'react'
import React from 'react'
import { GlobalContext } from '../Context/GlobalState'
import Transaction from './Transaction';

export default function TransactionList() {
    
  const {transactions}=useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul  className="list">
         {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
      </ul>
    </div>
  );
}
