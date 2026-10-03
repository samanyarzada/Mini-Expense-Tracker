import { useState } from "react";

import Header from "./components/Header";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseCard from "./components/ExpenseCard";
import Summary from "./components/Summary";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Internet",
      amount: 20,
      category: "Bills",
    },
    {
      id: 2,
      title: "Lunch",
      amount: 10,
      category: "Food",
    },
  ]);

  const [filter, setFilter] = useState("All");

  function addExpense(newExpense) {
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        ...newExpense,
        id: Date.now(),
      },
    ]);
  }

  function deleteExpense(id) {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((expense) => expense.id !== id)
    );
  }

  const filteredExpenses =
    filter === "All"
      ? expenses
      : expenses.filter(
          (expense) => expense.category === filter
        );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="max-w-5xl mx-auto px-5 py-10">

        <Summary expenses={expenses} />

        <div className="grid md:grid-cols-2 gap-8 mt-8">

          <ExpenseForm onAddExpense={addExpense} />

          <div>
            <div className="bg-white rounded-xl shadow p-5 mb-5">

              <div className="flex justify-between items-center mb-5">
                <h2 className="text-xl font-bold">
                  Expenses
                </h2>

                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="border rounded-lg px-3 py-2"
                >
                  <option value="All">All</option>
                  <option value="Food">Food</option>
                  <option value="Bills">Bills</option>
                  <option value="Transport">
                    Transport
                  </option>
                  <option value="Shopping">
                    Shopping
                  </option>
                </select>
              </div>

              {filteredExpenses.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  No expenses found.
                </p>
              ) : (
                <div className="space-y-4">
                  {filteredExpenses.map((expense) => (
                    <ExpenseCard
                      key={expense.id}
                      expense={expense}
                      onDelete={deleteExpense}
                    />
                  ))}
                </div>
              )}

            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;