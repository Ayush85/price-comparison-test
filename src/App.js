import "./App.css";
import Card from "./components/Card";
import DetailPage from "./components/DetailPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Card />} />
          <Route exact path="/detail/:_id" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
