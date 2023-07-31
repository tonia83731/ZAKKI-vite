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
            <Route path="/ZAKKI-vite/" element={<HomePage />} />
            <Route path="/ZAKKI-vite/stories" element={<StoriesPage />} />
            <Route path="/ZAKKI-vite/programs" element={<ProgramPage />} />
            <Route
              path="/ZAKKI-vite/programs/:id"
              element={<OneProgramPage />}
            />
            <Route path="/ZAKKI-vite/events" element={<EventPage />} />
            <Route path="/ZAKKI-vite/events/:id" element={<OneEventPage />} />
            <Route path="/ZAKKI-vite/joinus" element={<JoinUs />} />
            <Route path="/ZAKKI-vite/team" element={<TeamPage />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
      <Footer />
    </div>
  );
}

export default App;
