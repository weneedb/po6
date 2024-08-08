import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/section/Main";

const Home = lazy(() => import("./components/pages/Home"));
const Port = lazy(() => import("./components/pages/Port"));
const Page = lazy(() => import("./components/pages/Page"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/port" element={<Port />} />
          <Route path="/page" element={<Page />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
