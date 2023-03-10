import './Scss/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Layouts/Header/Header';
import Home from './Pages/Home/Home';
import New from './Pages/New/new';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Layouts/Footer/Footer';
import Popular from './Pages/Popular/Popular';
import MovieDetails from './Pages/MovieDetails/MovieDetails';

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/new" element={<New />} />
        <Route exact path="/popular" element={<Popular />} />
        <Route exact path="/movie/:id" element={<MovieDetails />} />
        <Route exact path='*' element={<NotFound />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
