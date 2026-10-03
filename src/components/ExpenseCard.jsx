function ExpenseCard({ expense, onDelete }) {
  return (
    <div className="border rounded-xl p-4 flex items-center justify-between">

      <div>
        <h3 className="font-bold">
          {expense.title}
        </h3>

        <p className="text-sm text-gray-500">
          {expense.category}
        </p>
      </div>

      <div className="flex items-center gap-4">

        <span className="font-bold text-blue-600">
          ${expense.amount}
        </span>

        <button
          onClick={() => onDelete(expense.id)}
          className="bg-red-100 text-red-600 px-3 py-2 rounded-lg hover:bg-red-200"
        >
          Delete
        </button>

      </div>
    </div>
  );
}

export default ExpenseCard;