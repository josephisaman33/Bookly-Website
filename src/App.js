import './App.css';
import Landing from './Landing';
import Login from './Login';
import Home from './Home';
import Bookshelf from './Bookshelf';
import BookRec from './BookRec';
import Library from './Library';
import Reflection from './Reflection';
import Account from './Account';
import NavBar from './components/NavBar';
import {Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
        <Route path="/bookrec" element={<BookRec />} />
        <Route path="/library" element={<Library />} />
        <Route path="/reflection" element={<Reflection />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;