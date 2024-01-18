import { Route, Routes } from "react-router";
import { Home } from "./Components/Home/Home";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/login" element={<div>Login</div>} />
          <Route path="/register" element={<div>Register</div>} />
          <Route path="/home" element={<div>Home</div>} />
        </Route>
      </Routes>
  );
}

export default App;
