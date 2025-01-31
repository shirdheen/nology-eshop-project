import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage/HomePage";
import DessertsPage from "./pages/DessertsPage/DessertsPage";
import DessertDetailsPage from "./pages/DessertDetailsPage/DessertDetailsPage";
import CartPage from "./pages/CartPage/CartPage";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/desserts" element={<DessertsPage />} />
            <Route path="/desserts/:id" element={<DessertDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
