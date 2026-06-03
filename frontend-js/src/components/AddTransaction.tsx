import React, {useState} from 'react'
import { Header2 } from './Header';

const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

  return (
    <>
        <Header2 title="Add transaction" />
        <form>
            {/* text field */}
            <div className="form-control">
                <label htmlFor="text" className="text font-bold">Description</label>
                <br></br>
                <input 
                className="bg-gray-100"
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder='Enter text...' />

            </div>
            {/* amount field */}
            <div className="form-control">
                <label htmlFor="amount" className="amount font-bold">
                    Amount 
                    <br/>
                </label>
                    £<input 
                    className="bg-gray-100"
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.valueAsNumber)}
                    placeholder='Enter amount...' />
            </div>
            <button className="bg-green-400 p-2 rounded-full mt-4 text-white font-bold">Add Transaction</button>
        </form>
    </>
  )
}

export default AddTransaction