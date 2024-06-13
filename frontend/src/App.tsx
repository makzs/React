import React from 'react';
import CepConsultar from './components/pages/cep/cep-Consultar';
import ProdutoListar from './components/pages/produto/produto-Consultar';
import ProdutoCadastrar from './components/pages/produto/produto-Cadastrar';

function App() {
  return (
    <div className="App">
      <h1>Integrando API</h1>
      <ProdutoListar></ProdutoListar>
      <hr></hr>
      <ProdutoCadastrar></ProdutoCadastrar>
      <hr></hr>
    </div>
  );
}

export default App;
