import React, { useState, useEffect } from "react";

const Calculator = () => {
  
  const [preState, setPreState] = useState("");
  const [currentState, setCurrentState] = useState("");
  const [input, setInput] = useState("0")
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    // mencegah dua titik berderet di screen
    if(currentState.includes(".") && e.target.innerText === ".") return;

    //reset prestate jika sudah ada hasil
    if(total) {
      setPreState("");
    }

    currentState ? setCurrentState((pre) => pre + e.target.innerText) : setCurrentState(e.target.innerText);
    setTotal(false)
  }


    useEffect(() => {
      setInput(currentState);
    }, [currentState])

    useEffect(() => {
      setInput("0")
    },[])

    const operatorType = (e) => {
      setTotal(false);
      setOperator(e.target.innerText);
      if(currentState === "") return;
      if(preState !== ""){
        equals();
      }else{
        setPreState(currentState);
        setInput(preState)
        setCurrentState("");
      }
    }
    
    const equals = (e) => {
      if(e?.target.innerText === "="){
        setTotal(true);
      }

      let cal;
      switch(operator){
        case "/" :
          cal = String(parseFloat(preState) / parseFloat(currentState));
          break;
        case "x" :
          cal = String(parseFloat(preState) * parseFloat(currentState));
          break;
        case "-" :
          cal = String(parseFloat(preState) - parseFloat(currentState));
          break;
        case "+" :
          cal = String(parseFloat(preState) + parseFloat(currentState));
          break;
        default: 
        return;
      }
      setInput("");
      setPreState(cal)
      setCurrentState("")
    }

    const percent = () => {
      preState ? setCurrentState(String((parseFloat(currentState)
      / 100) * preState)) : setCurrentState(String(parseFloat(currentState) / 100))
    }

    const clearOne = () => {
      if (currentState !== ""){
        setCurrentState(currentState.slice(0, -1))
      }else{
        preState(preState.slice(0, -1));
      }
    }

    const clearAll = () => {
      setPreState("");
      setCurrentState("");
      setInput("0");
    }

  return (
    <div>
      <div className="container h-[78vh]">
        <div className="w-[360px] h-[682px] mx-auto bg-[#17171c] mt-5 ">
            {/* Screen */}
            <div className="w-full">
                <form>
                {input !== "" || input === "0" ? <input className="w-full h-44 mt-14 bg-transparent px-4 text-right text-6xl placeholder:text-white text-white" value={input} type="text" /> : <input className="w-full h-44 mt-14 bg-transparent px-4 text-right text-6xl placeholder:text-white text-white" value={preState} type="text" />}
                    
                </form>
            </div>

            {/* Keypad */}
            <div className="px-4 mt-4 grid grid-cols-4 gap-2
            ">
                <button onClick={clearAll} className="flex justify-center items-center bg-[#4E505F] hover:bg-[#42434D] px-7 py-4 rounded-2xl text-white text-4xl">AC</button>
                <button onClick={clearOne} className="flex justify-center items-center bg-[#4E505F] hover:bg-[#42434D] px-7 py-4 rounded-2xl text-white text-4xl">C</button>
                <button onClick={percent} className="flex justify-center items-center bg-[#4E505F] hover:bg-[#42434D] px-7 py-4 rounded-2xl text-white text-4xl">%</button>
                <button onClick={operatorType} className="flex justify-center items-center bg-[#4B5EFC] hover:bg-[#3446e4] px-7 py-4 rounded-2xl text-white text-4xl">/</button>

                <button onClick={inputNum} className="flex justify-center items-center bg-[#2E2F38] hover:bg-[#232328] px-7 py-4 rounded-2xl text-white text-4xl">7</button>
                <button onClick={inputNum} className="flex justify-center items-center bg-[#2E2F38] hover:bg-[#232328] px-7 py-4 rounded-2xl text-white text-4xl">8</button>
                <button onClick={inputNum} className="flex justify-center items-center bg-[#2E2F38] hover:bg-[#232328] px-7 py-4 rounded-2xl text-white text-4xl">9</button>
                <button onClick={operatorType} className="flex justify-center items-center bg-[#4B5EFC] hover:bg-[#3446e4] px-7 py-4 rounded-2xl text-white text-4xl">x</button>
                
                <button onClick={inputNum} className="flex justify-center items-center bg-[#2E2F38] hover:bg-[#232328] px-7 py-4 rounded-2xl text-white text-4xl">4</button>
                <button onClick={inputNum} className="flex justify-center items-center bg-[#2E2F38] hover:bg-[#232328] px-7 py-4 rounded-2xl text-white text-4xl">5</button>
                <button onClick={inputNum} className="flex justify-center items-center bg-[#2E2F38] hover:bg-[#232328] px-7 py-4 rounded-2xl text-white text-4xl">6</button>
                <button onClick={operatorType} className="flex justify-center items-center bg-[#4B5EFC] hover:bg-[#3446e4] px-7 py-4 rounded-2xl text-white text-4xl">-</button>

                <button onClick={inputNum} className="flex justify-center items-center bg-[#2E2F38] hover:bg-[#232328] px-7 py-4 rounded-2xl text-white text-4xl">1</button>
                <button onClick={inputNum} className="flex justify-center items-center bg-[#2E2F38] hover:bg-[#232328] px-7 py-4 rounded-2xl text-white text-4xl">2</button>
                <button onClick={inputNum} className="flex justify-center items-center bg-[#2E2F38] hover:bg-[#232328] px-7 py-4 rounded-2xl text-white text-4xl">3</button>
                <button onClick={operatorType} className="flex justify-center items-center bg-[#4B5EFC] hover:bg-[#3446e4] px-7 py-4 rounded-2xl text-white text-4xl">+</button>

                <button onClick={inputNum} className="flex justify-center items-center bg-[#2E2F38] hover:bg-[#232328] px-7 py-4 rounded-2xl text-white text-4xl">.</button>
                <button onClick={inputNum} className="flex justify-center items-center bg-[#2E2F38] hover:bg-[#232328] px-7 py-4 rounded-2xl text-white text-4xl">0</button>
                <button onClick={equals} className="flex justify-center items-center bg-[#4B5EFC] hover:bg-[#3446e4] px-7 py-4 rounded-2xl text-white text-4xl col-span-2">=</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
  