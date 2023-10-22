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
                                <div className="icon"><i aria-hidden="true" className="ti ti-world"></i></div><span>Country</span>
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
                <form action="" method="POST">
                    <h1 class="text-center">Account Information</h1>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <label class="profile_details_text">First Name :</label>
                                <input type="text" name="first_name" class="form-control" required />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                            <div class="form-group">
                                <label class="profile_details_text">Last Name : </label>
                                <input type="text" name="last_name" class="form-control" required />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label class="profile_details_text">Email Address :</label>
                                <input type="email" name="email" class="form-control" required />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label class="profile_details_text">Mobile Number :</label>
                                <input type="tel" name="phone" class="form-control" />

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label class="profile_details_text">Date Of Birth :</label>
                                <input type="date" name="birthday" class="form-control" required />
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div class="form-group">
                                <label class="profile_details_text">Gender :</label>
                                <select name="gender" class="form-control" required>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
                            <div class="form-group">
                                <input type="submit" class="btn btn-success" value="Submit" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </body>
    )
}

export default EmployerDashboard;
