import React from 'react'
import './component_css/dashboard.css'

function CompanyDashboard() {
    return (
        <body className="custom-styles">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
            <header className="header">
                <nav className="navbar">
                    <div className="group">
                        <h3>Dashboard</h3>
                        <ul className="menu">
                            <li className="menu-item">
                                <div className="icon"><i aria-hidden="true" className="ti ti-user"></i></div><span>Profile</span>
                            </li>
                            <li className="menu-item">
                                <div className="icon"><i aria-hidden="true" className="ti ti-file"></i></div><span>Manage Jobs</span>
                            </li>
                            <li className="menu-item">
                                <div className="icon"><i aria-hidden="true" className="ti ti-settings-filled"></i></div><span>List Jobs</span>
                            </li>
                            <li className="menu-item">
                                <div className="icon"><i aria-hidden="true" className="ti ti-logout"></i></div><span>Applications</span>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="user">
                    <div className="avatar"></div>
                    <div className="info">
                        <span className="name">Brand</span>
                    </div>
                </div>
            </header>
            <div className="body-section">
            </div>
        </body>
    )
}

export default CompanyDashboard;
