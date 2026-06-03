import React from 'react'

import { MoneyLargeIncome, MoneyLargeExpense } from './Money';

export const IncomeExpenses = () => {
  return (
    <>
        <div className="max-w-md bg-white border-0 rounded-lg shadow-inner shadow-md p-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="income flex flex-col items-center">
              <h2 className="money-plus text-xl font-bold text-slate-800">Income</h2>
              <MoneyLargeIncome value={3400.11} />
            </div>
            <div className="expense flex flex-col items-center">
              <h2 className="money-minus text-xl font-bold text-slate-800">Expense</h2>
              <MoneyLargeExpense value={445.89} />
            </div>
          </div>
        </div>
        <br></br>

    </>
  )
}
















// <div className="income-expense-container">
// <div className="income">
//     <h4>Income</h4>
//     <p id="money-plus" className="money plus">+£0.00</p>
// </div>
// <div className="expense">
//     <h4>Expense</h4>
//     <p id="money-minus" className="money minus">-£0.00</p>
// </div>
// </div>