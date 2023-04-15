
const App = () => {
  const [numbers, setNumbers] = React.useState([]);
  const [value, setValue] = React.useState(null);

  const handleClick = (action) => {
    switch (action) {
      case "addNumbers":
        const newNumbers = Array.from({ length: 5 }, () =>
          Math.trunc(Math.random() * 100)
        );
        setNumbers([...numbers, ...newNumbers]);
        break;
      case "findLargest":
        const largest = Math.max(...numbers);
        setValue(largest);
        break;
      case "sum":
        const sum = numbers.reduce((a, b) => a + b, 0);
        setValue(sum);
        break;
      case "sort":
        const sorted = [...numbers].sort((a, b) => a - b);
        setNumbers(sorted);
        break;
      case "reset":
        setNumbers([]);
        setValue(null);
        break;
      default:
        break;
    }
  };

  return (
    <div className="box">
      <h1>Array: {JSON.stringify(numbers)}</h1>
      <h3>Value: {JSON.stringify(value)}</h3>
      <div className="btns">
      <button onClick={() => handleClick("addNumbers")}>
         5 Random Numbers
      </button>
      <button onClick={() => handleClick("findLargest")}>
        Find Largest Element
      </button>
      <button onClick={() => handleClick("sum")}>Sum Of Elements</button>
      <button onClick={() => handleClick("sort")}>Sort Elements</button>
      <button onClick={() => handleClick("reset")}>Reset Everything</button>
      </div>
    </div>
  );
};




 

const container =  document.getElementById("root");
const root = ReactDOM.createRoot(container)
root.render(<App/>)