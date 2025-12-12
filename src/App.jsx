import "./App.css";
import Rate from "./components/Rate/Rate";
import Result from "./components/Result/Result";
import { useState } from "react";
function App() {
  const [rate, setRate] = useState();

  const [submit, setSubmit] = useState(false);

  return (
    <>
      {submit ? (
        <Result rate={rate} />
      ) : (
        <Rate rate={rate} setRate={setRate} setSubmit={setSubmit} />
      )}
    </>
  );
}

export default App;
