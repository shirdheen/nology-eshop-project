import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import DessertsPage from "./pages/DessertsPage/DessertsPage";
import DessertDetailsPage from "./pages/DessertDetailsPage/DessertDetailsPage";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/desserts" element={<DessertsPage />} />
          <Route path="/desserts/:id" element={<DessertDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
