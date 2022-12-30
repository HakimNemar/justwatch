import './scss/style.css';
import Header from './Components/Header/Header';
import Home from './Components/Pages/Home/Home';
import New from './Components/Pages/New/new';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new" element={<New />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
