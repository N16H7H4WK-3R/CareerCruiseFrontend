import React from 'react'
import './component_css/dashboard.css'

function EmployerDashboard() {
    return (
        <body className="custom-styles">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
            <header className="header">
                <nav className="navbar">
                    <div className="group">
                        <h3>Preferences</h3>
                        <ul className="menu">
                            <li className="menu-item">
                                <div className="icon"><i aria-hidden="true" className="ti ti-world"></i></div>
                                <select>
                                    <option value="country1"><i aria-hidden="true" className="ti ti-world"></i>India</option>
                                    <option value="country2">USA</option>
                                    <option value="country3">Russia</option>
                                </select>
                            </li>
                            <li className="menu-item">
                                <div className="icon"><i aria-hidden="true" className="ti ti-line"></i></div><span>Role</span>
                            </li>
                            <li className="menu-item">
                                <div className="icon"><i aria-hidden="true" className="ti ti-pin"></i></div><span>Location</span>
                            </li>
                        </ul>
                    </div>
                    <div className="group">
                        <h3>About Me</h3>
                        <ul className="menu">
                            <li className="menu-item">
                                <div className="icon"><i aria-hidden="true" className="ti ti-user"></i></div><span>My Account</span>
                            </li>
                            <li className="menu-item">
                                <div className="icon"><i aria-hidden="true" className="ti ti-file"></i></div><span>Resume</span>
                            </li>
                            <li className="menu-item">
                                <div className="icon"><i aria-hidden="true" className="ti ti-settings-filled"></i></div><span>Settings</span>
                            </li>
                            <li className="menu-item">
                                <div className="icon"><i aria-hidden="true" className="ti ti-logout"></i></div><span>Logout</span>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="user">
                    <div className="avatar"></div>
                    <div className="info">
                        <h3 className="name">User Name</h3>
                        <span className="account-id">@username</span>
                    </div>
                </div>
            </header>
            <div className="body-section">
            </div>
        </body>
    )
}

export default EmployerDashboard;
