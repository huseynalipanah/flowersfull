import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./Layouts/MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import Add from "./Pages/Add/Add";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/Add" element={<Add />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
