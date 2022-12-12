import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header"
import Home from "./pages/home/home";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<h1>Popular</h1>}></Route>
          <Route path="movies/:type" element={<h1>Movies List Page</h1>}></Route>
          <Route path="/*" element={<h1>ERROR</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
