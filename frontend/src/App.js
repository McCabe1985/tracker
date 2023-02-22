import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import ArchiveScreen from "./screens/ArchiveScreen";
import SpecificLoadScreen from "./screens/SpecificLoadScreen";
function App() {
  return (
    <Router>
      <Header />
      <div className="App py-3">
        <Container>
          <Routes>
            <Route path="/" element={<ArchiveScreen />} />
            <Route path="/load/:id" element={<SpecificLoadScreen />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
