import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";

import StoriesPage from "./pages/StoriesPage";
import ProgramPage from "./pages/ProgramPage";
import EventPage from "./pages/EventPage";
import JoinUs from "./pages/JoinUsPage";
import TeamPage from "./pages/TeamPage";

import OneEventPage from "./pages/OneEventPage";
import OneProgramPage from "./pages/OneProgramPage";

function App() {
  return (
    <div id="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="stories" element={<StoriesPage />} />
          <Route path="programs" element={<ProgramPage />}></Route>
          <Route path="programs/one" element={<OneProgramPage />} />
          <Route path="events" element={<EventPage />}></Route>
          <Route path="events/one" element={<OneEventPage />} />
          <Route path="joinus" element={<JoinUs />} />
          <Route path="team" element={<TeamPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
