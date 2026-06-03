import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Header2 } from './Header';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
    <Header2 title="Transaction History" />
    <ul id="list" className='text-red-500'>
      {transactions.map(transaction => (
        <li className="minus">
          {transaction.text}: £{transaction.amount}
        </li>
      ))}
        {/* <li id="minus">
            Cash<span>-£400</span><button className="delete-btn">x</button>
        </li> */}
        
    </ul>
    <br></br>
    </>
  )
}

export default TransactionList