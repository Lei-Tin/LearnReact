import Expenses from "./components/Expenses"

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 6, 2),
    },
    {
      id: "e2",
      title: "Toliet Paper",
      amount: 123.45,
      date: new Date(2023, 6, 1),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
