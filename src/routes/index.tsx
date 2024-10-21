import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/home";
import Solana from "../pages/Solana";
// import Bscscan from "../pages/Bscscan";
// import Ton from "../pages/Ton";
// import Pulsechain from "../pages/Pulsechain";
// import Claim from "../components/section/Claim";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/solana" element={<Solana />} />
          {/* <Route path="/bscscan" element={<Bscscan />} />
          <Route path="/ton" element={<Ton />} />
          <Route path="/pulsechain" element={<Pulsechain />} />
          <Route path="/claim" element={<Claim />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
};
