import { useState } from "react";
import Topo from "./Topo";
import ServicosTerciarios from "./servicosTerciarios";
import TextoCidade from "./TextoCidade";
import ServicosEncontrados from "./ServicosEncontrados";
import './App.css';

function App() {
  return (
      <div>
        <Topo />
        <ServicosTerciarios />
        <TextoCidade />
        <ServicosEncontrados />
      </div>
  );
}

export default App;
