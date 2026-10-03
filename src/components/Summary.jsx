function Summary({ expenses }) {
  const total = expenses.reduce(
    (sum, expense) => sum + Number(expense.amount),
    0
  );

  return (
    <div className="grid md:grid-cols-3 gap-5">

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">
          Total Expenses
        </p>

        <h2 className="text-3xl font-bold mt-2">
          ${total}
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">
          Number of Expenses
        </p>

        <h2 className="text-3xl font-bold mt-2">
          {expenses.length}
        </h2>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <p className="text-gray-500">
          Average
        </p>

        <h2 className="text-3xl font-bold mt-2">
          $
          {expenses.length
            ? (total / expenses.length).toFixed(2)
            : 0}
        </h2>
      </div>

    </div>
  );
}

export default Summary;