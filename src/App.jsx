import { useState, useCallback } from "react";
import "./App.css";

function App() {
  //declare all States
  const [length, setLength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [val, setval] = useState("");

  //generate password function
  const GeneratePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+";
    }
    console.log(str);

    //loop through the number of times that is equal to state "length"
    for (let i = 0; i < length; i++) {
      //generate a random index from str
      const char = Math.floor(Math.random() * str.length + 1);
      //pick the character at said index and append to pass
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  //Function to copy password and give feedback
  const copyPasswordToClipboard = async () => {
    try {
      await window.navigator.clipboard.writeText(password);
      setval("Copied!!");
    } catch (err) {
      setval("Not Copied");
      console.error(err);
    } finally {
      setTimeout(() => {
        setval("");
      }, 3000);
    }
  };

  return (
    <>
      <div className="bg-white p-8 rounded-2xl w-[800px] flex flex-col gap-8">
        <div
          className={` rounded-md  bg-black text-white border-black border-2 text-sm px-3 py-2 fixed top-36 self-center ${
            val
              ? "block animate-fadeIn"
              : "hidden animate-[fadeIn_reverse_0.5s]"
          }`}
        >
          {val}
        </div>
        <h1 className="self-center text-2xl">Password Generator</h1>
        <div className="flex justify-start items-center gap-4">
          <input
            type="text"
            placeholder="Password"
            readOnly
            value={password}
            className="w-4/5 rounded-md bg-black text-white px-3 py-2"
          />
          <button
            onClick={GeneratePassword}
            className="hover:bg-myGradient hover:bg-ratata rounded-md border-black border-2 text-sm px-3 py-2  hover:text-white duration-300"
          >
            Generate
          </button>
          <button
            onClick={copyPasswordToClipboard}
            className=" hover:bg-myGradient hover:bg-ratata rounded-md border-black border-2 text-sm px-3 py-2 hover:text-white duration-300 "
          >
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
