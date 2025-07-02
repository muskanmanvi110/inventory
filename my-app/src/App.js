import logo from './logo.svg';
import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup.jsx';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [currentPage, setCurrentPage] = useState("dashboard");
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <>
      {loggedIn ? (
        <>
          <Header OpenSidebar={OpenSidebar} />
          <Sidebar openSidebarToggle={openSidebarToggle} 
          OpenSidebar={OpenSidebar}
          onPageChange={setCurrentPage}
           />
          {/* Add your main dashboard content here */}
          <div className="main-content"> {currentPage === "dashboard" && <Home />}
          </div>
        </>
      ) : (
        <LoginSignup onLogin={() => setLoggedIn(true)} />
      )}
    </>
  );
}

export default App;