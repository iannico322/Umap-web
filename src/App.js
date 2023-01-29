import { Welcome } from "./screen/welcome/welcome";
import { Login } from "./screen/login/login";
import { Register } from "./screen/register/register";
import { Profile } from "./screen/profile/profile";
import { Forgotpass } from "./screen/forgotpassword/forgotpass";
import MainDasboard from "./screen/main/main";
import { Admin } from "./screen/admin/admin";
import Guest from "./screen/main/guest";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import "animate.css";
import MontlyReport from "./components/pdf/pdf1";
import DailyReport from "./components/pdf/pdf2";
import Developers from "./screen/developers/developers";
import WeeklyReport from "./components/pdf/pdf3";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/umap-web" element={<Navigate replace to="/umap" />} />
        <Route path="/umap" element={<Welcome />} />
        <Route path="devs" element={<Developers />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot" element={<Forgotpass />} />
        <Route path="profile" element={<Profile />} />
        <Route path="admin" element={<Admin />} />
        <Route path="main" element={<MainDasboard />} />
        <Route path="guest" element={<Guest />} />
        <Route path="register" element={<Register />} />
        <Route path="reportMonth" element={<MontlyReport/>} />
        <Route path="reportDay" element={<DailyReport  />} />
        <Route path="reportWeek" element={<WeeklyReport  />} />
      </Routes>
    </Router>
  );
}
{/* <view>asd</view> */}
export default App;
