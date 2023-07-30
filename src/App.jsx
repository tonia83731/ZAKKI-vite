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

import { FormProvider } from "./context/FormContext";

function App() {
  return (
    <div id="app">
      <Header />
      <FormProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="stories" element={<StoriesPage />} />
            <Route path="programs" element={<ProgramPage />} />
            <Route path="programs/:id" element={<OneProgramPage />} />
            <Route path="events" element={<EventPage />} />
            <Route path="events/:id" element={<OneEventPage />} />
            <Route path="joinus" element={<JoinUs />} />
            <Route path="team" element={<TeamPage />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
      <Footer />
    </div>
  );
}

export default App;
