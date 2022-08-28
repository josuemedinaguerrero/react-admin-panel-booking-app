import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import FullscreenExitIcon from "@mui/icons-material/FullscreenExit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import "./navbar.scss";
import { useDarkMode } from "../../hooks/useDarkMode";

const Navbar = () => {
   const { dispatch, darkMode } = useDarkMode();

   return (
      <div className="navbar">
         <div className="wrapper">
            <div className="search">
               <input type="text" placeholder="Search..." />
               <SearchIcon />
            </div>
            <div className="items">
               <div className="item">
                  <LanguageIcon className="icon" />
                  English
               </div>
               <div
                  className="item"
                  onClick={() => dispatch({ type: "TOOGLE" })}
               >
                  {darkMode ? (
                     <WbSunnyIcon className="icon" />
                  ) : (
                     <DarkModeIcon className="icon" />
                  )}
               </div>
               <div className="item">
                  <FullscreenExitIcon className="icon" />
               </div>
               <div className="item">
                  <NotificationsIcon className="icon" />
                  <div className="counter">1</div>
               </div>
               <div className="item">
                  <ChatBubbleIcon className="icon" />
                  <div className="counter">2</div>
               </div>
               <div className="item">
                  <FormatListBulletedIcon className="icon" />
               </div>
               <div className="item">
                  <img
                     src="https://images.unsplash.com/photo-1590959651373-a3db0f38a961?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=739&q=80"
                     alt=""
                     className="avatar"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
