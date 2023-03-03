import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LogIn from "./pages/logIn";
import Register from "./pages/register";
import Home from "./pages/homeCowList";
import HomeCowsView from "./pages/homeCowsView";
import CreateCows from "./pages/createCows";
import CowsEvent from "./pages/cowsEventList";
import CowsEventView from "./pages/cowsEventView";
import CreateCowEvent from "./pages/createCowEvent";
import FarmDetails from "./pages/farmDetails";
import Profile from "./pages/profile";
import EditProfile from "./pages/editProfile";
import EditFarm from "./pages/editfarm";
import Createnewfarm from "./pages/createNewFarm";
import CreateVaccine from "./pages/createVaccine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="login" replace />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/:id" element={<Home />} />
        <Route path="/home/view" element={<HomeCowsView />} />
        <Route path="/home/view/:id" element={<HomeCowsView />} />
        <Route path="/home/createCows" element={<CreateCows />} />
        <Route path="/home/createCows/:id" element={<CreateCows />} />
        <Route path="/cows_event" element={<CowsEvent />} />
        <Route path="/cows_event/view/:id" element={<CowsEventView />} />
        <Route path="/createCowEvent" element={<CreateCowEvent />} />
        <Route path="/createCowEvent/:id" element={<CreateCowEvent />} />
        <Route
          path="/cows_event/createCowEvent/:id"
          element={<CreateCowEvent />}
        />
        <Route path="/farm_details" element={<FarmDetails />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/editProfile/:id" element={<EditProfile />} />
        <Route path="/editFarm/:id" element={<EditFarm />} />
        <Route path="/createNewFarm/:id" element={<Createnewfarm />} />
        <Route path="/createVaccine" element={<CreateVaccine />} />
        <Route path="/createVaccine/:id" element={<CreateVaccine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
