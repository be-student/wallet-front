import { Counter } from "./features/counter/Counter";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Default from "./pages/Default";
import Main from "./pages/Main";
import Send from "./pages/Send";
import Add from "./pages/Add";
import Create from "./pages/Create";
import Verify from "./pages/Verify";
import Info from "./pages/Info";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Default />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/main/send" element={<Send />}></Route>
        <Route path="/main/add" element={<Add />}></Route>
        <Route path="/main/info" element={<Info />}></Route>
        <Route path="/send" element={<Send />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
      </Routes>
    </div>
  );
}

export default App;
