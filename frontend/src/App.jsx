import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import AdminPage from "./pages/admin/AdminPage";
import LivePage from "./pages/live/LivePage";
import FindPWDPage from "./pages/auth/FindPWDPage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import PlayerDetailPage from "./pages/playerdetail/PlayerDetailPage";
import MyProfilePage from "./pages/profile/MyProfilePage";
import CustomSimulationPage from "./pages/simulation/CustomSimulationPage";
import MatchSimultaionPage from "./pages/simulation/MatchSimulationPage";
import SimulationPage from "./pages/simulation/SimulationPage";
import TeamCustomPage from "./pages/team/TeamCustomPage";
import TeamDetailPage from "./pages/team/TeamDetailPage";

import GlobalStyle from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/findPwd" element={<FindPWDPage />} />
        <Route path="/myprofile" element={<MyProfilePage />} />
        <Route path="/teamcustom" element={<TeamCustomPage />} />
        <Route path="/teamdetail" element={<TeamDetailPage />} />
        <Route path="/playerdetail" element={<PlayerDetailPage />} />
        <Route path="/matchsimulation" element={<MatchSimultaionPage />} />
        <Route path="/customsimultaion" element={<CustomSimulationPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/simulation" element={<SimulationPage />} />
        <Route path="/live" element={<LivePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
