import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
