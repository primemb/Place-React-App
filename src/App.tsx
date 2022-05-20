import React from "react";
import MainLayout from "./layout/MainLayout";
import Router from "./routes/Router";

function App() {
  return (
    <MainLayout>
      <Router />
    </MainLayout>
  );
}

export default App;
