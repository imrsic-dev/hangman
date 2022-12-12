import React, { lazy, Suspense } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import Navigation from "./components/Layout/Navigation/Navigation.component";

const HomePage = lazy(() => import("./pages/home/Home.page"));
const GamePage = lazy(() => import("./pages/game/GamePage"));
const GameOverPage = lazy(() => import("./pages/game-over/GameOverPage"));
const HighScorePage = lazy(() => import("./pages/highscore/HighscorePage"));
const HowToPlayPage = lazy(() => import("./pages/how-to-play/HowToPlay.page"));

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navigation />
            <Suspense fallback={<span>Loading ...</span>}>
              <Outlet />
            </Suspense>
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
