import { GlobalProvider } from './context/GlobalState';
import ExpenseApp from './components/ExpenseApp';
import './App.css';

export default function App() {
  return (
    <GlobalProvider>
      <ExpenseApp />
    </GlobalProvider>
  );
}