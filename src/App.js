import "./App.css";
import Landing from "./Landing";
import Login from "./Login";
import Home from "./Home";
import Bookshelf from "./Bookshelf";
import Library from "./Library";
import Reflection from "./Reflection";
import Trial from "./Trial";
import Account from "./Account";
import Search from "./Search";
import Search2 from "./Search2";
import Register from "./Register";
import NavBar from "./components/NavBar";
import Logout from "./Logout";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  //useEffect and authentication route made in reference to: https://react.dev/reference/react/useEffect
  useEffect(() => {
    fetch("/api/checkToken").then((res) => {
      if (res.status === 200) {
        setAuthenticated(true);
      }
    });
  });

  return (
    <div className="App">
      <NavBar authenticated={authenticated}/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home authenticated={authenticated}/>} />
        <Route path="/bookshelf" element={<Bookshelf />} />
        <Route path="/library" element={<Library />} />
        <Route path="/reflection" element={<Reflection />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/account" element={<Account />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/search_guest" element={<Search2 />}/>
      </Routes>
    </div>
  );
}

export default App;
