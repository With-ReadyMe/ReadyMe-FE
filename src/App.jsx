import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/landingPage/AboutUs";
import ProjectList from "./pages/projects/projectList/ProjectList";
import ProjectCreate from "./pages/projects/projectCreate/ProjectCreate";
import Auth from "./pages/auth/Auth";
import PortfolioLanding from "./pages/portfolio/portfolioLanding/PortfolioLanding";
import PortfolioCreate from "./pages/portfolio/portfolioCreate/PortfolioCreate";
import PortfolioDetail from "./pages/portfolio/portfolioDetail/PortfolioDetail";
import GlobalStyle from "./styled/Global";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/new" element={<ProjectCreate />} />
          <Route path="/portfolio" element={<PortfolioLanding />} />
          <Route path="/portfolio/create" element={<PortfolioCreate />} />
          <Route path="/portfolio/detail" element={<PortfolioDetail />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
