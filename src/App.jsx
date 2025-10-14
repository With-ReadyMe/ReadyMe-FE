import { BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalStyle from "./css/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
