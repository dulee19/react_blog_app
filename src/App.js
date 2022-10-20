import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Article from "./pages/Article";

export const base = {
  REACT_API_URL: "http://18.192.182.140/api/articles",
  REACT_API_KEY: "9aK4W3D7NpbWwPzJmUOIcyPmyehl0PHZLWP14rzQqKzUPtcFCo0Tn051CvwN",
};

const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <main>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/article/:id" element={<Article />} />
          </Routes>
        </main>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
