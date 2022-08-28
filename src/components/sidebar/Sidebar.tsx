import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import PeopleSharpIcon from "@mui/icons-material/PeopleSharp";
import ProductionQuantityLimitsSharpIcon from "@mui/icons-material/ProductionQuantityLimitsSharp";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import QueryStatsSharpIcon from "@mui/icons-material/QueryStatsSharp";
import NotificationsSharpIcon from "@mui/icons-material/NotificationsSharp";
import MedicationLiquidSharpIcon from "@mui/icons-material/MedicationLiquidSharp";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../hooks/useDarkMode";
import "./sidebar.scss";

const Sidebar = () => {
   const { dispatch } = useDarkMode();

   return (
      <div className="sidebar">
         <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
               <span className="logo">JoAdmin</span>
            </Link>
         </div>
         <hr />
         <div className="center">
            <ul>
               <p className="title">MAIN</p>
               <Link to="/" style={{ textDecoration: "none" }}>
                  <li>
                     <DashboardSharpIcon className="icon" />
                     <span>Dashboard</span>
                  </li>
               </Link>
               <p className="title">LISTS</p>
               <Link to="/users" style={{ textDecoration: "none" }}>
                  <li>
                     <PeopleSharpIcon className="icon" />
                     <span>Users</span>
                  </li>
               </Link>
               <Link to="/hotels" style={{ textDecoration: "none" }}>
                  <li>
                     <ProductionQuantityLimitsSharpIcon className="icon" />
                     <span>Hotels</span>
                  </li>
               </Link>
               <Link to="/rooms" style={{ textDecoration: "none" }}>
                  <li>
                     <InventorySharpIcon className="icon" />
                     <span>Rooms</span>
                  </li>
               </Link>
               <li>
                  <LocalShippingSharpIcon className="icon" />
                  <span>Delivery</span>
               </li>
               <p className="title">USEFUL</p>
               <li>
                  <QueryStatsSharpIcon className="icon" />
                  <span>Stats</span>
               </li>
               <li>
                  <NotificationsSharpIcon className="icon" />
                  <span>Notifications</span>
               </li>
               <p className="title">SERVICE</p>
               <li>
                  <MedicationLiquidSharpIcon className="icon" />
                  <span>System Health</span>
               </li>
               <li>
                  <PsychologyIcon className="icon" />
                  <span>Logs</span>
               </li>
               <li>
                  <SettingsIcon className="icon" />
                  <span>Settings</span>
               </li>
               <p className="title">USER</p>
               <li>
                  <AccountCircleIcon className="icon" />
                  <span>Profile</span>
               </li>
               <li>
                  <LogoutOutlinedIcon className="icon" />
                  <span>Logout</span>
               </li>
            </ul>
         </div>
         <div className="bottom">
            <div
               className="colorOption"
               onClick={() => dispatch({ type: "LIGHT" })}
            ></div>
            <div
               className="colorOption"
               onClick={() => dispatch({ type: "DARK" })}
            ></div>
         </div>
      </div>
   );
};

export default Sidebar;
