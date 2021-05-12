

function App() {
  const color = "blue"
  const buttonBg = `bg-${color}-600`
  const buttonColor = "bg-purple-600"

  return (
    <div>
      <button className={`${buttonColor} w-auto px-4 py-2 text-white font-semibold m-8`}>
        Button
      </button>
      <button className={`${buttonBg} w-auto px-4 py-2 text-white font-semibold m-8 border border-blue-200`}>
        Button
      </button>
    </div>
  );
}

export default App;
