import { useState } from "react";

function App() {
  const [color, setColor] = useState("teal");

  function changeColor(color) {
    setColor(color);
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => changeColor("green")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >
            green
          </button>
          <button
            onClick={() => changeColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          >
            pink
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
