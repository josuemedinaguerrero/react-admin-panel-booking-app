import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import TableMU from "../../components/table/Table";
import "./single.scss";
const Single = () => {
   return (
      <div className="single">
         <Sidebar />
         <div className="singleContainer">
            <Navbar />
            <div className="top">
               <div className="left">
                  <div className="editButton">Edit</div>
                  <h1 className="title">Information</h1>
                  <div className="item">
                     <img
                        src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg"
                        alt=""
                        className="itemImg"
                     />
                     <div className="details">
                        <h1 className="itemTitle">Test User</h1>
                        <div className="detailItem">
                           <span className="itemKey">Email:</span>
                           <span className="itemValue">test1@test.com</span>
                        </div>
                        <div className="detailItem">
                           <span className="itemKey">Phone:</span>
                           <span className="itemValue">+593 991528005</span>
                        </div>
                        <div className="detailItem">
                           <span className="itemKey">Address:</span>
                           <span className="itemValue">Guayas, Daule</span>
                        </div>
                        <div className="detailItem">
                           <span className="itemKey">Country:</span>
                           <span className="itemValue">Ecuador</span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="right">
                  <Chart
                     aspect={3 / 1}
                     title="User Spending ( Last 6 Months )"
                  />
               </div>
            </div>
            <div className="bottom">
               <h1 className="title">Last transactions</h1>
               <TableMU />
            </div>
         </div>
      </div>
   );
};

export default Single;
