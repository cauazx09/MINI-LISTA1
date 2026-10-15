import React, { useState } from 'react';

export default function App() {
  const [inputTexto, setInputTexto] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (!inputTexto.trim()) return;

    // Objeto com ID único garante que a remoção ocorra sem erros de renderização
    const novaTarefa = {
      id: Date.now(),
      texto: inputTexto.trim()
    };

    setTarefas((tarefasAnteriores) => [...tarefasAnteriores, novaTarefa]);
    setInputTexto("");
  };

  const removerTarefa = (id) => {
    setTarefas((tarefasAnteriores) =>
      tarefasAnteriores.filter((tarefa) => tarefa.id !== id)
    );
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionarTarefa}>
        <input
          type="text"
          value={inputTexto}
          onChange={(e) => setInputTexto(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {tarefa.texto}{" "}
            <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}