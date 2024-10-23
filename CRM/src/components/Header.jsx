// Header.js
import React, { useState, useEffect } from 'react';
// import './Header.css'; // Import your custom CSS here


const Header = () => {
  const [time, setTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formattedTime = `${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')}`;
  const formattedDate = time.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (

    <>


   <div className="offcanvas-overlay"></div>
  
    
    <header className="header white-bg fixed-top d-flex align-content-center flex-wrap">
      {/* Logo */}
      <div className="logo" style={{
        padding:"10px"
      }}>
        <a href="index.html" className="default-logo">
          <img src="src/assets/img/logo.png" alt="Logo" />
        </a>
        <a href="index.html" className="mobile-logo">
          <img src="src/assets/img/logo.png" alt="Mobile Logo" />
        </a>
      </div>

      {/* Main Header */}
      <div className="main-header">
        <div className="container-fluid">
          <div className="row justify-content-between">
            <div className="col-3 col-lg-1 col-xl-4">
              {/* Header Left */}
              <div className="main-header-left h-100 d-flex align-items-center">
                {/* User Section */}
                <div className="main-header-user">
                  <a href="#" className="d-flex align-items-center" data-toggle="dropdown">
                    <div className="menu-icon">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>

                    <div className="user-profile d-xl-flex align-items-center d-none">
                      <div className="user-avatar">
                        <img src="src/assets/img/avatar/user.png" alt="User Avatar" />
                      </div>
                      <div className="user-info">
                        <h4 className="user-name">Abhishek Kachhawa</h4>
                        <p className="user-email">abhishekkachhawa1205@gmail.com</p>
                      </div>
                    </div>
                  </a>
                  <div className="dropdown-menu">
                    <a href="#">My Profile</a>
                    <a href="#">Task</a>
                    <a href="#">Settings</a>
                    <a href="#">Log Out</a>
                  </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="main-header-menu d-block d-lg-none">
                  <div className="header-toogle-menu">
                    <img src="src/assets/img/menu.png" alt="Menu Icon" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-9 col-lg-11 col-xl-8">
              {/* Header Right */}
              <div className="main-header-right d-flex justify-content-end">
                <ul className="nav">
                  <li className="ml-0">
                    <div className="main-header-language">
                      <a href="#" data-toggle="dropdown">
                        <img src="src/assets/img/svg/globe-icon.svg" alt="Globe Icon" />
                      </a>
                      <div className="dropdown-menu style--three">
                        {['USA', 'China', 'Russia', 'Spain', 'Brazil', 'France', 'Algeria'].map((country) => (
                          <a href="#" key={country}>
                            <span>
                              <img src={`src/assets/img/${country.toLowerCase()}.png`} alt={country} />
                            </span>
                            {country}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>

                  <li className="ml-0 d-none d-lg-flex">
                    <div className="main-header-print">
                      <a href="#">
                        <img src="src/assets/img/svg/print-icon.svg" alt="Print Icon" />
                      </a>
                    </div>
                  </li>

                  <li className="d-none d-lg-flex">
                    <div className="main-header-date-time text-right">
                      <h3 className="time">{formattedTime}</h3>
                      <span className="date">{formattedDate}</span>
                    </div>
                  </li>

                  <li className="d-none d-lg-flex">
                    <div className="main-header-btn ml-md-1">
                      <a href="#" className="btn">Pending Tasks</a>
                    </div>
                  </li>

                  <li className="order-2 order-sm-0">
                    <div className="main-header-search">
                      <form action="#" className="search-form">
                        <div className="theme-input-group header-search">
                          <input type="text" className="theme-input-style" placeholder="Search Here" />
                          <button type="submit">
                            <img src="src/assets/img/svg/search-icon.svg" alt="Search Icon" className="svg" />
                          </button>
                        </div>
                      </form>
                    </div>
                  </li>

                  <li>
                    <div className="main-header-message">
                      <a href="#" className="header-icon" data-toggle="dropdown">
                        <img src="src/assets/img/svg/message-icon.svg" alt="Message Icon" className="svg" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <div className="dropdown-header d-flex align-items-center justify-content-between">
                          <h5>3 Unread messages</h5>
                          <a href="#" className="text-mute d-inline-block">Clear all</a>
                        </div>
                        <div className="dropdown-body">
                          {[1, 2, 3].map((msg) => (
                            <a href="#" key={msg} className="item-single d-flex media align-items-center">
                              <div className="figure">
                                <img src={`src/assets/img/avatar/m${msg}.png`} alt={`Message ${msg}`} />
                                <span className="avatar-status bg-teal"></span>
                              </div>
                              <div className="content media-body">
                                <h6 className="name">Sender Name {msg}</h6>
                                <p className="main-text">Lorem ipsum dolor sit amet, consectetur.</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>

                  <li>
                    <div className="main-header-notification">
                      <a href="#" className="header-icon notification-icon" data-toggle="dropdown">
                        <span className="count">22</span>
                        <img src="src/assets/img/svg/notification-icon.svg" alt="Notification Icon" className="svg" />
                      </a>
                      <div className="dropdown-menu style--two dropdown-menu-right">
                        <div className="dropdown-header d-flex align-items-center justify-content-between">
                          <h5>5 New notifications</h5>
                          <a href="#" className="text-mute d-inline-block">Clear all</a>
                        </div>
                        <div className="dropdown-body">
                          {[1, 2, 3].map((notif) => (
                            <a href="#" key={notif} className="item-single d-flex align-items-center">
                              <p className="main-text">Notification {notif}</p>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;

