import { useState } from 'react';
import './styles.css';
import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  const validUser = {
    email: 'erianni6044@gmail.com',
    password: '123456',
    name: 'Administrator',
  };

  const handleLogin = (email: string, password: string) => {
    if (email === validUser.email && password === validUser.password) {
      setIsAuthenticated(true);
      setUserName(validUser.name);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName('');
  };

  return (
    <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout} userName={userName} />}
      <div className="content">
        <Routes>
          {!isAuthenticated ? (
            <Route path="/*" element={<Login onLogin={handleLogin} />} />
          ) : (
            <Route path="/" element={<Home userName={userName} />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
