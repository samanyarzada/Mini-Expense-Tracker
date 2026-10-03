function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-5 py-5">
        <h1 className="text-2xl font-bold">
          Expense Tracker
        </h1>

        <p className="text-gray-400 mt-1">
          Manage your daily expenses
        </p>
      </div>
    </header>
  );
}

export default Header;