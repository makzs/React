import React from 'react';
import ProdutoListar from './components/pages/produto/produto-Consultar';
import ProdutoCadastrar from './components/pages/produto/produto-Cadastrar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li><Link to={"/pages/produto/listar"}>Listar Produtos</Link></li>
            <li><Link to={"/pages/produto/cadastrar"}>Cadastrar Produtos</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path='/pages/produto/listar' element={<ProdutoListar></ProdutoListar>} />
          <Route path='/pages/produto/cadastrar' element={<ProdutoCadastrar></ProdutoCadastrar>} />
        </Routes>
        <footer>
          <p>Desenvolvido por Erik</p>
        </footer>
        <hr></hr>
      </BrowserRouter>

    </div>
  );
}

export default App;
