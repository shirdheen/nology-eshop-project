import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import DessertsPage from "./pages/DessertsPage/DessertsPage";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/desserts" element={<DessertsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
