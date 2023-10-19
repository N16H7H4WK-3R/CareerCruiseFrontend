import React from 'react'
import './component_css/employer_dashboard.css'

function EmployerDashboard() {
    return (
        <body class="custom-styles">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
            <header class="header">
                <nav class="navbar">
                    <div class="group">
                        <h3>Preferences</h3>
                        <ul class="menu">
                            <li class="menu-item">
                                <div class="icon"><i aria-hidden="true" class="ti ti-world"></i></div><span>Country</span>
                            </li>
                            <li class="menu-item">
                                <div class="icon"><i aria-hidden="true" class="ti ti-line"></i></div><span>Role</span>
                            </li>
                            <li class="menu-item">
                                <div class="icon"><i aria-hidden="true" class="ti ti-pin"></i></div><span>Location</span>
                            </li>
                        </ul>
                    </div>
                    <div class="group">
                        <h3>ABOUT ME</h3>
                        <ul class="menu">
                            <li class="menu-item">
                                <div class="icon"><i aria-hidden="true" class="ti ti-user"></i></div><span>My Account</span>
                            </li>
                            <li class="menu-item">
                                <div class="icon"><i aria-hidden="true" class="ti ti-file"></i></div><span>Resume</span>
                            </li>
                            <li class="menu-item">
                                <div class="icon"><i aria-hidden="true" class="ti ti-settings-filled"></i></div><span>Settings</span>
                            </li>
                            <li class="menu-item">
                                <div class="icon"><i aria-hidden="true" class="ti ti-logout"></i></div><span>Logout</span>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div class="user">
                    <div class="avatar"></div>
                    <div class="info">
                        <h6 class="name">User Name</h6>
                        <span class="account-id">@username</span>
                    </div>
                </div>
            </header>
        </body>
    )
}

export default EmployerDashboard;
