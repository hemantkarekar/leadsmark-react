import React from "react";
import { Bell, Calendar, Gift, Grid, HelpCircle, Instagram, LogOut, Mail, Menu, MessageSquare, Repeat, Search, User } from "react-feather";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="#" className="sidebar-toggler">
          <Menu/>
        </NavLink>
        <div className="navbar-content">
          <form className="search-form">
            <div className="input-group">
              <div className="input-group-text">
                <Search />
              </div>
              <input
                type="text"
                className="form-control"
                id="navbarForm"
                placeholder="Search here..."
              />
            </div>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item" style={{width: 200 + 'px'}}>
              <div className="actions w-100">
                <form action="" className="nav-link">
                  <select name="" id="clientsSelect" className="form-control">
                    <option value="N1kpK954srINrkcp" data-origin="StemRx">
                      StemRx Website
                    </option>
                    <option value="wyj496iThHwgfU6w" data-origin="Sociomark">
                      Sociomark - Digital Marketing Agency
                    </option>
                  </select>
                </form>
              </div>
              {/* <style>
					.select2_option-icon {
						height: 20px;
					}
				</style> */}
            </li>
            <li className="nav-item">XXX.XXX.XXX.XXX</li>
            <li className="nav-item">
              <button id="startTour" className="btn nav-link">
                <HelpCircle/>
              </button>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                href="#"
                id="appsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <Grid />
              </NavLink>
              <div className="dropdown-menu p-0" aria-labelledby="appsDropdown">
                <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                  <p className="mb-0 fw-bold">Web Apps</p>
                  <NavLink to="" className="text-muted">
                    Edit
                  </NavLink>
                </div>
                <div className="row g-0 p-1">
                  <div className="col-3 text-center">
                    <NavLink
                      to="pages/NavLinkpps/chat.html"
                      className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"
                    >
                      <MessageSquare
                        className="icon-lg mb-1"
                      />
                      <p className="tx-12">Chat</p>
                    </NavLink>
                  </div>
                  <div className="col-3 text-center">
                    <NavLink
                      to="pages/NavLinkpps/calendar.html"
                      className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"
                    >
                      <Calendar className="icon-lg mb-1"/>
                      <p className="tx-12">Calendar</p>
                    </NavLink>
                  </div>
                  <div className="col-3 text-center">
                    <NavLink
                      to="pages/email/inbox.html"
                      className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"
                    >
                      <Mail className="icon-lg mb-1"/>
                      <p className="tx-12">Email</p>
                    </NavLink>
                  </div>
                  <div className="col-3 text-center">
                    <NavLink
                      to="pages/general/profile.html"
                      className="dropdown-item d-flex flex-column align-items-center justify-content-center wd-70 ht-70"
                    >
                      <Instagram className="icon-lg mb-1"/>
                      <p className="tx-12">Profile</p>
                    </NavLink>
                  </div>
                </div>
                <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                  <NavLink to="">View all</NavLink>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                href="#"
                id="messageDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <Mail/>
              </NavLink>
              <div
                className="dropdown-menu p-0"
                aria-labelledby="messageDropdown"
              >
                <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                  <p>9 New Messages</p>
                  <NavLink to="" className="text-muted">
                    Clear all
                  </NavLink>
                </div>
                <div className="p-1">
                  <NavLink
                    to=""
                    className="dropdown-item d-flex align-items-center py-2"
                  >
                    <div className="me-3">
                      <img
                        className="wd-30 ht-30 rounded-circle"
                        src="https://placehold.co/30x30"
                        alt="userr"
                      />
                    </div>
                    <div className="d-flex justify-content-between flex-grow-1">
                      <div className="me-4">
                        <p>Leonardo Payne</p>
                        <p className="tx-12 text-muted">Project status</p>
                      </div>
                      <p className="tx-12 text-muted">2 min ago</p>
                    </div>
                  </NavLink>
                  <NavLink
                    to=""
                    className="dropdown-item d-flex align-items-center py-2"
                  >
                    <div className="me-3">
                      <img
                        className="wd-30 ht-30 rounded-circle"
                        src="https://placehold.co/30x30"
                        alt="userr"
                      />
                    </div>
                    <div className="d-flex justify-content-between flex-grow-1">
                      <div className="me-4">
                        <p>Carl Henson</p>
                        <p className="tx-12 text-muted">Client meeting</p>
                      </div>
                      <p className="tx-12 text-muted">30 min ago</p>
                    </div>
                  </NavLink>
                  <NavLink
                    to=""
                    className="dropdown-item d-flex align-items-center py-2"
                  >
                    <div className="me-3">
                      <img
                        className="wd-30 ht-30 rounded-circle"
                        src="https://placehold.co/30x30"
                        alt="userr"
                      />
                    </div>
                    <div className="d-flex justify-content-between flex-grow-1">
                      <div className="me-4">
                        <p>Jensen Combs</p>
                        <p className="tx-12 text-muted">Project updates</p>
                      </div>
                      <p className="tx-12 text-muted">1 hrs ago</p>
                    </div>
                  </NavLink>
                  <NavLink
                    to=""
                    className="dropdown-item d-flex align-items-center py-2"
                  >
                    <div className="me-3">
                      <img
                        className="wd-30 ht-30 rounded-circle"
                        src="https://placehold.co/30x30"
                        alt="userr"
                      />
                    </div>
                    <div className="d-flex justify-content-between flex-grow-1">
                      <div className="me-4">
                        <p>Amiah Burton</p>
                        <p className="tx-12 text-muted">Project deatline</p>
                      </div>
                      <p className="tx-12 text-muted">2 hrs ago</p>
                    </div>
                  </NavLink>
                  <NavLink
                    to=""
                    className="dropdown-item d-flex align-items-center py-2"
                  >
                    <div className="me-3">
                      <img
                        className="wd-30 ht-30 rounded-circle"
                        src="https://placehold.co/30x30"
                        alt="userr"
                      />
                    </div>
                    <div className="d-flex justify-content-between flex-grow-1">
                      <div className="me-4">
                        <p>Yaretzi Mayo</p>
                        <p className="tx-12 text-muted">New record</p>
                      </div>
                      <p className="tx-12 text-muted">5 hrs ago</p>
                    </div>
                  </NavLink>
                </div>
                <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                  <NavLink to="">View all</NavLink>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="notificationDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <Bell/>
                <div className="indicator">
                  <div className="circle"></div>
                </div>
              </a>
              <div
                className="dropdown-menu p-0"
                aria-labelledby="notificationDropdown"
              >
                <div className="px-3 py-2 d-flex align-items-center justify-content-between border-bottom">
                  <p>6 New Notifications</p>
                  <NavLink to="" className="text-muted">
                    Clear all
                  </NavLink>
                </div>
                <div className="p-1">
                  <NavLink
                    to=""
                    className="dropdown-item d-flex align-items-center py-2"
                  >
                    <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                      <Gift className="icon-sm text-white" />
                    </div>
                    <div className="flex-grow-1 me-2">
                      <p>New Order Recieved</p>
                      <p className="tx-12 text-muted">30 min ago</p>
                    </div>
                  </NavLink>
                  <NavLink
                    to=""
                    className="dropdown-item d-flex align-items-center py-2"
                  >
                    <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                      <i
                        className="icon-sm text-white"
                        data-feather="alert-circle"
                      ></i>
                    </div>
                    <div className="flex-grow-1 me-2">
                      <p>Server Limit Reached!</p>
                      <p className="tx-12 text-muted">1 hrs ago</p>
                    </div>
                  </NavLink>
                  <NavLink
                    to=""
                    className="dropdown-item d-flex align-items-center py-2"
                  >
                    <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                      <img
                        className="wd-30 ht-30 rounded-circle"
                        src="https://placehold.co/30x30"
                        alt="userr"
                      />
                    </div>
                    <div className="flex-grow-1 me-2">
                      <p>New customer registered</p>
                      <p className="tx-12 text-muted">2 sec ago</p>
                    </div>
                  </NavLink>
                  <NavLink
                    to=""
                    className="dropdown-item d-flex align-items-center py-2"
                  >
                    <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                      <i
                        className="icon-sm text-white"
                        data-feather="layers"
                      ></i>
                    </div>
                    <div className="flex-grow-1 me-2">
                      <p>Apps are ready for update</p>
                      <p className="tx-12 text-muted">5 hrs ago</p>
                    </div>
                  </NavLink>
                  <NavLink
                    to=""
                    className="dropdown-item d-flex align-items-center py-2"
                  >
                    <div className="wd-30 ht-30 d-flex align-items-center justify-content-center bg-primary rounded-circle me-3">
                      <i
                        className="icon-sm text-white"
                        data-feather="download"
                      ></i>
                    </div>
                    <div className="flex-grow-1 me-2">
                      <p>Download completed</p>
                      <p className="tx-12 text-muted">6 hrs ago</p>
                    </div>
                  </NavLink>
                </div>
                <div className="px-3 py-2 d-flex align-items-center justify-content-center border-top">
                  <NavLink to="">View all</NavLink>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="wd-30 ht-30 rounded-circle"
                  src="https://placehold.co/30x30"
                  alt="profile"
                />
              </a>
              <div
                className="dropdown-menu p-0"
                aria-labelledby="profileDropdown"
              >
                <div className="d-flex flex-column align-items-center border-bottom px-5 py-3">
                  <div className="mb-3">
                    <img
                      className="wd-80 ht-80 rounded-circle"
                      src="https://placehold.co/80x80"
                      alt=""
                    />
                  </div>
                  <div className="text-center">
                    <p className="tx-16 fw-bolder">Amiah Burton</p>
                    <p className="tx-12 text-muted">amiahburton@gmail.com</p>
                  </div>
                </div>
                <ul className="list-unstyled p-1">
                  <li className="dropdown-item py-2">
                    <NavLink to="profile" className="text-body ms-0">
                      <User className="me-2 icon-md" />
                      <span>Profile</span>
                    </NavLink>
                  </li>
                  <li className="dropdown-item py-2">
                    <NavLink to="" className="text-body ms-0">
                      <Repeat className="me-2 icon-md" />
                      <span>Switch User</span>
                    </NavLink>
                  </li>
                  <li className="dropdown-item py-2">
                    <NavLink to="logout" className="text-body ms-0">
                      <LogOut className="me-2 icon-md"/>
                      <span>Log Out</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
