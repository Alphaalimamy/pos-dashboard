
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Customer from "./components/pages/Customer";
import Dashboard from "./components/pages/Dashboard";
import Invoice from "./components/pages/Invoice";
import Products from "./components/pages/Products";
import Transaction from "./components/pages/Transaction";
import Layout from "./components/shared/Layout";
import Message from "./components/pages/Message";
import Settings from "./components/pages/Settings";
import Support from "./components/pages/Support";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="order" element={<Invoice />} />
          <Route path="product" element={<Products />} />
          <Route path="customer" element={<Customer />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="message" element={<Message />} />
          <Route path="setting" element={<Settings />} />
          <Route path="support" element={<Support />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
