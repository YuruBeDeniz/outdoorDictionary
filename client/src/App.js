import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Profile from './components/Profile';
import Topic from './components/Topic'


function App() {
  return (
    <div className="App">
    <h1>Outdoor Dictionary</h1>
    <Navbar />
    <Routes>
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
      <Route path='/profile/:id' element={<Profile />} />
      <Route path='/topic/:id' element={<Topic />} />
    </Routes>
    </div>
  );
}

export default App;
