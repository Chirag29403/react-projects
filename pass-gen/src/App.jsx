import { useCallback, useEffect, useRef } from "react";
import { useState }  from "react"

function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberAllowed] = useState(false);
  const [charallowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [button, setButton] = useState("Copy");
  const [isDisabled, setIsDisabled] = useState(false);

  //useRef
 const passwordRef = useRef(null);

  let passwordgen = useCallback( () => {

    let pass="";
    let str = "ABCDERFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let char = "!@#$%^&*()_+";
    if (numberallowed) {
      str += num;
    }
    if (charallowed) {
      str += char;
    }
    for (let index = 1; index < length; index++) {
      let char= Math.floor(Math.random() * str.length+1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numberallowed, charallowed,setPassword]);

  useEffect(() => {
    passwordgen();
  }
  , [length, numberallowed, charallowed, passwordgen]);

  const copytoclipboard = useCallback(() => {
    passwordRef.current.select();
    navigator.clipboard.writeText(passwordRef.current.value);
    setButton("Copied!");
    setIsDisabled(true);

    setTimeout(() => {
      setButton("Copy");
      setIsDisabled(false);
    },2000);
  }, [password]) 
  

  return (
    <>
  <div className="flex flex-col items-center justify-center h-screen bg-gray-700">
    <div className="bg-blue-950 p-6 rounded-lg shadow-md text-orange-400">
      <h1 className="text-3xl font-bold text-center ">
        Password Generator
      </h1>
      <div className="flex gap-4 mt-8 rounded-2xl">
      <input type="text"
      readOnly
      ref={passwordRef}
      value={password}
      placeholder="Generated Password"
      className="border border-gray-300 p-2 rounded-2xl w-full pl-4 text-orange-400 "
      />
      <button className={`p-4 ${isDisabled ? "bg-gray-700 cursor-not-allowed" : "bg-orange-400 hover:bg-orange-600 "} text-white rounded-2xl} rounded-2xl`}
       onClick={copytoclipboard} disabled={isDisabled}>
        {button}
        </button>
      </div>

    <div className="flex gap-4 mt-4">
      <div className="flex gap-1">
      <input type="range"
      min={8}
      max={20}
      value={length}
      onChange={(e) => setLength(e.target.value)}
      className="
      cursor-pointer"
      />
      <label>Length: {length}</label>
      </div>

      <div className="flex gap-1">
      <input type="checkbox" id="number"
      defaultChecked={numberallowed}
      
      onChange={
        () => {
          setNumberAllowed((previous) => !previous);
        }
      }
      className="cursor-pointer"
      />
      <label htmlFor="number">Number Allowed</label>
      </div>
      
      <div className="flex gap-1"> 
      <input type="checkbox" id="char"
      className="cursor-pointer"
      defaultChecked={charallowed}
      onChange = {() => {
        setCharAllowed((previous) => !previous);
      }}
      />
      <label htmlFor="char">Character Allowed</label>
    </div>
      </div>

    </div>
  </div>
    </>
  )
}

export default App
