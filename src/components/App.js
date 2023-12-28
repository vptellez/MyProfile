import { Routes, Route } from 'react-router-dom';
import Layout from "./Layout"
import PathConstants from "../routes/pathConstants";
import Home from "../routes/Home";
import NoPage from "../routes/NoPage";
import About from "../routes/About";
import Portfolio from "../routes/Portfolio";
import Team from "../routes/Team";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PathConstants.ABOUT} element={<About />} />
          <Route path={PathConstants.PORTFOLIO} element={<Portfolio />} />
          <Route path={PathConstants.TEAM} element={<Team />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;