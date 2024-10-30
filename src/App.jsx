import { useState, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  function GeneratePassword() {
    useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      if (numberAllowed) {
        str += "0123456789";
      }
      if (charAllowed) {
        str += "!@#$%^&*()_+";
      }

      for (let i = 1; i < length; i++) {
        const char = Math.floor(Math.random() * length + 1);
        pass += str.charAt(char);
      }
      setPassword(pass);
    },[length,numberAllowed,charAllowed]);
  }

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
  }

  useEffect(() => {
    GeneratePassword()
  }, [length, numberAllowed, charAllowed])

  return (
    <>
      <div className="bg-white p-8 rounded-2xl w-[800px] flex flex-col gap-8">
        <h1 className="self-center text-2xl">Password Generator</h1>
        <div className="flex justify-start items-center gap-4">
          <input
            type="text"
            placeholder="Password"
            readOnly
            value={password}
            className="w-4/5 rounded-md bg-black text-white px-3 py-2"
          />
          <button onClick={copyPasswordToClipboard}className="rounded-md border-black border-2 text-sm px-3 py-2 hover:border-white hover:bg-black hover:text-white duration-300">
            Copy
          </button>
        </div>
        <div className="flex justify-start gap-20">
          <div className="flex items-center gap-2">
            <input
              name="length"
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              defaultChecked={numberAllowed}
              type="checkbox"
              onChange={() => {
                setnumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              defaultChecked={charAllowed}
              type="checkbox"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characters">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
