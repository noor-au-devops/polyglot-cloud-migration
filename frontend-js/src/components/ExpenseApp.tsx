import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function ExpenseApp() {
  const { transactions, addTransaction, deleteTransaction } = useContext(GlobalContext) as any;
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const total = transactions.reduce((a: number, t: any) => a + t.amount, 0);
  const income = transactions.filter((t: any) => t.amount > 0).reduce((a: number, t: any) => a + t.amount, 0);
  const expense = transactions.filter((t: any) => t.amount < 0).reduce((a: number, t: any) => a + t.amount, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || !amount) return;
    addTransaction({ id: Date.now(), text: text.trim(), amount: parseFloat(amount) });
    setText(''); setAmount('');
  };

  return (
    <div className="app">
      <div className="header">
        <div>
          <h1 style={{fontSize:'18px',fontWeight:600,color:'inherit'}}>Expense Tracker</h1>
          <p style={{fontSize:'13px',color:'#94a3b8',marginTop:'2px'}}>Polyglot Cloud Migration — v2.0</p>
        </div>
        <span className="badge">Live on AWS</span>
      </div>

      <div className="balance-card">
        <p style={{fontSize:'13px',color:'#94a3b8',marginBottom:'4px'}}>Total Balance</p>
        <div className="balance-amount">
          {total >= 0 ? '+' : ''}£{total.toFixed(2)}
        </div>
        <p style={{fontSize:'12px',color:'#94a3b8',marginTop:'4px'}}>Updated just now</p>
      </div>

      <div className="grid2">
        <div className="stat">
          <p className="stat-label">↑ Income</p>
          <div className="stat-val income">+£{income.toFixed(2)}</div>
        </div>
        <div className="stat">
          <p className="stat-label">↓ Expenses</p>
          <div className="stat-val expense-text">-£{Math.abs(expense).toFixed(2)}</div>
        </div>
      </div>

      <div className="card">
        <p className="card-title">Transaction history</p>
        {transactions.length === 0 ? (
          <p className="empty">No transactions yet</p>
        ) : (
          <ul style={{listStyle:'none'}}>
            {transactions.map((t: any) => {
              const isInc = t.amount > 0;
              return (
                <li key={t.id} className="tx">
                  <div className="tx-left">
                    <div className={`tx-icon ${isInc ? 'inc' : 'exp'}`}>
                      {isInc ? '↑' : '↓'}
                    </div>
                    <div>
                      <div className="tx-name">{t.text}</div>
                      <div className="tx-type">{isInc ? 'Income' : 'Expense'}</div>
                    </div>
                  </div>
                  <div style={{display:'flex',alignItems:'center',gap:'8px'}}>
                    <span className={isInc ? 'tx-amount-inc' : 'tx-amount-exp'}>
                      {isInc ? '+' : '-'}£{Math.abs(t.amount).toFixed(2)}
                    </span>
                    <button className="del-btn" onClick={() => deleteTransaction(t.id)}>✕</button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      <div className="card">
        <p className="card-title">Add transaction</p>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label className="form-label">Description</label>
            <input className="form-input" value={text} onChange={e => setText(e.target.value)} placeholder="e.g. Coffee, Salary..." />
          </div>
          <div className="form-row">
            <label className="form-label">Amount <span style={{color:'#94a3b8'}}>(negative = expense)</span></label>
            <input className="form-input" type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="e.g. 100 or -50" />
          </div>
          <button type="submit" className="add-btn">+ Add transaction</button>
        </form>
      </div>
    </div>
  );
}