import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import Art from "../pages/art";
import Team from "../pages/team";
import Faqs from "../pages/faqs";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/art" element={<Art />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faqs" element={<Faqs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
