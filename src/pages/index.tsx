// src/App.tsx
import React from "react";
import { Game } from "../components/Game";

const data = `Pedra, Papel, Tesoura,
Lagarto, Spock
`

function App() {
  return (
    <div className="App bg-gray-200 opacity-80 flex justify-center flex-col items-center min-h-screen">
      <h2 className="text-3xl text-slate-800 text-center font-bold"><strong>{data}</strong></h2>
      <Game />
    </div>
  );
}

export default App;
