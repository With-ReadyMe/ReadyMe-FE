import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./styled/Global";

function App() {
    return (
        <>
            <GlobalStyle />
            <Router>
                <Routes>
                    <Route path="/aboutus" element={<AboutUs />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
