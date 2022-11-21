import { Routes, Route, Outlet } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import GamePage from "./pages/game/GamePage";
import GameOverPage from "./pages/game-over/GameOverPage";
import HighScorePage from "./pages/highscore/HighscorePage";
import HowToPlayPage from "./pages/how-to-play/HowToPlayPage";

import Navigation from "./components/Layout/Navigation/Navigation.component";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navigation />
            <Outlet />
          </>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="game" element={<GamePage />} />
        <Route path="game-over" element={<GameOverPage />} />
        <Route path="highscore" element={<HighScorePage />} />
        <Route path="how-to-play" element={<HowToPlayPage />} />
        <Route path="*" element={<div>404</div>} />
      </Route>
    </Routes>
  );
}

export default App;
