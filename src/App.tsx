import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Default from "./pages/Default";
import Main from "./pages/Main";
import Send from "./pages/Send";
import Add from "./pages/Add";
import Create from "./pages/Create";
import Verify from "./pages/Verify";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

function App() {
  return (
    <div
      style={{ display: "flex", height: "100vh", width: "100%" }}
      className="App"
    >
      <Sidebar />
      <div style={{ width: "100%", background: "#F6F8F8" }}>
        <Header />
        <Link to="/">main</Link>
        <Link to="/main">main</Link>
        <Link to="/main">main</Link>
        <Routes>
          <Route path="/" element={<Default />}></Route>
          <Route path="/main" element={<Main />}></Route>
          <Route path="/send" element={<Send />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/send" element={<Send />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/verify" element={<Verify />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
