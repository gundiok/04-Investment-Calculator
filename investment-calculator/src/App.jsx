import { useState } from "react";
import Header from "./Header";
import Input from "./Input";
import Results from "./Results";

function App() {
  const [input, setInput] = useState({
    initialInvestment: 6000,
    annualInvestment: 3000,
    expectedReturn: 8,
    duration: 12,
  });

  function handleInputChange(identifier, newValue) {
    setInput((prevInput) => {
      return {
        ...prevInput,
        [identifier]: +newValue,
      };
    });
  }

  
  return (
    <>
      <Header />
      <Input onChange = {handleInputChange} input = {input}/>
      {input.duration >= 1 ? <Results input = {input} /> : <p className="center">Please enter a valid duration</p>};
    </>
  );
}

export default App;
