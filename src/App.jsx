import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/landingPage/AboutUs";
import ProjectList from "./pages/projects/projectList/ProjectList";
import ProjectCreate from "./pages/projects/projectCreate/ProjectCreate";
import GlobalStyle from "./styled/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/new" element={<ProjectCreate />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
