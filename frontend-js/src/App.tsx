import React from 'react';
import { Header } from './components/Header' 
import { Balance } from './components/Balance' 
import { IncomeExpenses} from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';



function App() {
  return (
    <>
    <GlobalProvider>
      <div className="bg-zinc-300"> 
        <div className="h-screen p-7 mx-auto w-full"> 
          {/* replace with Expense App or made up business name  */}
          <Header title="App" />
            <div className="container">
              <Balance />
              <IncomeExpenses /> 
              <TransactionList />
              <AddTransaction />
            </div>
        </div>
      </div>
    </GlobalProvider>
    </>
  )
}

export default App;
