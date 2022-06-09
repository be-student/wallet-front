import "./App.css";
import { Route, Routes } from "react-router-dom";
import Default from "./pages/Default";

import Send from "./pages/Send";
import Add from "./pages/Add";
import CreateWallet from "./pages/CreateWallet";
import Verify from "./pages/Verify";
import Info from "./pages/Info";
import CreateToken from "./pages/CreateToken";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Default />}></Route>
        <Route path="/createWallet" element={<CreateWallet />}></Route>
        <Route path="/main/send" element={<Send />}></Route>
        <Route path="/main/add" element={<Add />}></Route>
        <Route path="/main/info" element={<Info />}></Route>
        <Route path="/main/create" element={<CreateToken />}></Route>
        <Route path="/send" element={<Send />}></Route>
        <Route path="/verify" element={<Verify />}></Route>
      </Routes>
    </div>
  );
}

export default App;
