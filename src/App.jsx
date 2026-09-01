import Menu from './Menu';
import Dados from './Dados';
import { HashRouter, Routes, Route } from 'react-router-dom'; // 👈 CORRIGIDO: Adicionado Routes e Route aqui
import Home from "./Home";
import Formacao from "./pages/Formacao";
import Experiencias from "./pages/Experiencias";
import Projetos from "./pages/Projetos";

function App() {
  return (
    <HashRouter> 
      <Dados />
      <Menu />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formacao" element={<Formacao />} />
          <Route path="/experiencias" element={<Experiencias />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;



