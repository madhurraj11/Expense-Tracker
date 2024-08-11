import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if(!input || !amount) return;

    const newExpense = {
      id: expenses.length + 1,
      title: input,
      amount: amount,
    };

    setExpenses([...expenses, newExpense]);
    setInput("");
    setAmount("");
  }

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id!== id);
    setExpenses(updatedExpenses);
  }

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <div className="input-container">
        <input type="text" placeholder="Expense Tracker" value={input} onChange={(e) => setInput(e.target.value)}/>
        <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button className="addBtn" onClick={addExpense}>Add Expense</button>
      </div>
      <ul className="expense-list">
      {
        expenses.map((expense) => {
          return <li key={expense.id}>
            <span>{expense.title}</span>
            <span>{expense.amount}</span>
            <button className="deleteBtn" onClick={()=>deleteExpense(expense.id)}>Delete</button>
            </li>
        })
      }
      </ul>  
    </div>
  );
};

export default App;
