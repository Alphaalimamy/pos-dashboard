
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./components/pages/Dashboard";
import Invoice from "./components/pages/Invoice";
import Products from "./components/pages/Products";
import Layout from "./components/shared/Layout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="order" element={<Invoice />} />
          <Route path="product" element={<Products />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
