import { Header } from "./components/Header.jsx"
import { Balance } from "./components/Balance.jsx"
import { IncomeExpenses } from "./components/IncomeExpenses.jsx"
import { TransactionList } from "./components/TransactionList.jsx"
import { AddTransaction } from "./components/AddTransaction.jsx"

import { GlobalProvider } from './context/GlobalState'

function App() {

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App
