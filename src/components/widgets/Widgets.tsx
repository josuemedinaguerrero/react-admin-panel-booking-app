import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FilterFramesIcon from "@mui/icons-material/FilterFrames";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import "./widgets.scss";

interface WidgetsProps {
   type: "user" | "order" | "earning" | "balance";
}

const Widgets = ({ type }: WidgetsProps) => {
   let data;
   const amount = 100,
      diff = 20;

   switch (type) {
      case "user":
         data = {
            title: "USERS",
            isMoney: false,
            link: "See all users",
            icon: (
               <AccountCircleIcon
                  className="icon"
                  style={{
                     color: "crimson",
                     backgroundColor: "rgba(255, 0, 0, 0.2)",
                  }}
               />
            ),
         };
         break;
      case "order":
         data = {
            title: "ORDERS",
            isMoney: false,
            link: "View all orders",
            icon: (
               <FilterFramesIcon
                  className="icon"
                  style={{
                     color: "goldenrod",
                     backgroundColor: "rgba(218, 165, 32, 0.2)",
                  }}
               />
            ),
         };
         break;
      case "earning":
         data = {
            title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            icon: (
               <MonetizationOnIcon
                  className="icon"
                  style={{
                     color: "green",
                     backgroundColor: "rgba(0, 128, 0, 0.2)",
                  }}
               />
            ),
         };
         break;
      case "balance":
         data = {
            title: "BALANCES",
            isMoney: true,
            link: "See details",
            icon: (
               <AccountBalanceIcon
                  className="icon"
                  style={{
                     color: "purple",
                     backgroundColor: "rgba(128, 0, 128, 0.2)",
                  }}
               />
            ),
         };
         break;

      default:
         break;
   }

   return (
      <div className="widget">
         <div className="left">
            <span className="title">{data?.title}</span>
            <span className="counter">
               {data?.isMoney && "$"} {amount}
            </span>
            <span className="link">{data?.link}</span>
         </div>
         <div className="right">
            <div className="percentage positive">
               <ArrowCircleUpIcon className="icon" />
               {diff}%
            </div>
            {data?.icon}
         </div>
      </div>
   );
};

export default Widgets;
