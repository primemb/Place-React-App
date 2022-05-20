import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const AddLocation = lazy(() => import("../pages/AddLocation/AddLocation"));

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/add" element={<AddLocation />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
