import React from 'react';
import { MoneySmallIncome } from './Money';
import { BasicText } from './Header';

export const Balance = () => {
  return (
    <>
    <div className="text-slate-800 pt-5 pb-5">
    <BasicText title="Your Balance" />
    <MoneySmallIncome value={2954.22} />
    </div>
</>
  )
}
