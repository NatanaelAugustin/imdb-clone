import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Category from "./pages/category/category";
import Movie from "./pages/movieDetail/movie";
import { MovieProvider } from "./Contexts/movieContext";




function App() {
  return (
    <MovieProvider>
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<Category />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
    </MovieProvider>
  );
}

export default App;
