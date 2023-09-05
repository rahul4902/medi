import { Link } from "react-router-dom";
import Logo from "../../icons/logo.svg";
import HomeIcon from "../../icons/HomeIcon";
import VialIcon from "../../icons/VialIcon";
import UserIcons from "../../icons/UserIcons";

const SideBar = ({ isOpen, onSidebarToggle }) => {
  return (
    <div className={`side-bar ${isOpen ? "close" : ""}`}>
      <div className="sidebar-icon-section">
        <ul>
          <li>
            <Link>
              <HomeIcon />
            </Link>
          </li>
          <li>
            <Link>
              <VialIcon />
            </Link>
          </li>
          <li className="active">
            <Link>
              <UserIcons />
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={`sidebar-text-section  ${isOpen ? "close-nav-text" : ""}`}
      >
        <ul>
          <li>
            <Link to="/admin/">Dashboard</Link>
          </li>
          <li>
            <Link>Diagnostic Tests</Link>
          </li>
          <li className="active">
            <Link>Clients</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideBar;
