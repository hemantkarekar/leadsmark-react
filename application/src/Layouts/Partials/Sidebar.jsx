import { NavLink } from "react-router-dom";
import "react-feather";
import logo from "../../logo.png";
import { Box, Database, Hash, PieChart, Settings } from "react-feather";
function Sidebar() {
  return (
    <>
      <nav className="sidebar">
        <div className="sidebar-header">
          <NavLink className="sidebar-brand">
            <img src={logo} alt="" width="160" />
          </NavLink>
          <div className="sidebar-toggler not-active">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="sidebar-body">
          <div className="nav">
            <NavLink
              to="/"
              className={(e) => {
                return e.isActive ? "nav-item active" : "nav-item";
              }}
            >
              <div className="nav-link">
                <Box className="link-icon" />
                <span className="link-title">Dashboard</span>
              </div>
            </NavLink>
            <NavLink
              to="/leads"
              className={(e) => {
                return e.isActive ? "nav-item active" : "nav-item";
              }}
            >
              <div className="nav-link">
                <Database className="link-icon" />
                <span className="link-title">Leads</span>
              </div>
            </NavLink>
            <NavLink
              to="/campaigns"
              className={(e) => {
                return e.isActive ? "nav-item active" : "nav-item";
              }}
            >
              <div className="nav-link campaigns">
                <Database className="link-icon" />
                <span className="link-title">Campaigns</span>
              </div>
            </NavLink>
            <NavLink
              to="/analytics"
              className={(e) => {
                return e.isActive ? "nav-item active" : "nav-item";
              }}
            >
              <div className="nav-link analytics">
                <PieChart className="link-icon" />
                <span className="link-title">Analytics</span>
              </div>
            </NavLink>

            <div className="nav-item nav-category">Leads Channels</div>
            <div className="nav-item channels">
              <NavLink
                to="channels"
                className={(e) => {
                  return e.isActive ? "nav-link active" : "nav-link";
                }}
              >
                <Database className="link-icon" />
                <span className="link-title">Channels</span>
              </NavLink>
            </div>
            <div className="nav-item settings">
              <NavLink
                to="settings"
                className={(e) => {
                  return e.isActive ? "nav-link active" : "nav-link";
                }}
              >
                <Settings className="link-icon" />
                <span className="link-title">Settings</span>
              </NavLink>
            </div>

            <div className="nav-item nav-category">Apps</div>
            <div className="nav-item app-settings">
              <NavLink
                to="app-settings"
                className={(e) => {
                  return e.isActive ? "nav-link active" : "nav-link";
                }}
              >
                <Settings className="link-icon" />
                <span className="link-title">App Settings</span>
              </NavLink>
            </div>

            <div className="nav-item nav-category">Docs</div>
            <div className="nav-item">
              <NavLink
                to="https://www.nobleui.com/html/documentation/docs.html"
                target="_blank"
                className={(e) => {
                  return e.isActive ? "nav-link active" : "nav-link";
                }}
              >
                <Hash className="link-icon" />
                <span className="link-title">Documentation</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
