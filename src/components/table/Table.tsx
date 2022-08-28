import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.scss";

const TableMU = () => {
   const rows = [
      {
         id: 1611417,
         product: "Coso 1",
         img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/afa52b62887ed55475d095a8e18c5610b2444d28beb5b6ee2f322e6613374bad._RI_V_TTW_.jpg",
         customer: "Josué Medina",
         date: "1 March",
         amount: 984,
         method: "Cash on Delivery",
         status: "Approved",
      },
      {
         id: 65168189,
         product: "Coso 2",
         img: "https://concepto.de/wp-content/uploads/2018/09/google-e1537467715310.jpg",
         customer: "Arduino Alchedo",
         date: "1 March",
         amount: 984,
         method: "Cash on Delivery",
         status: "Pending",
      },
      {
         id: 46489,
         product: "Coso 3",
         img: "https://m.media-amazon.com/images/G/01/digital/video/acquisition/amazon_video_light_on_dark.png",
         customer: "Alejandro Guerrero",
         date: "1 March",
         amount: 984,
         method: "Cash on Delivery",
         status: "Approved",
      },
   ];

   return (
      <TableContainer component={Paper} className="table">
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow>
                  <TableCell className="tablecell">Tracking ID</TableCell>
                  <TableCell className="tablecell">Product</TableCell>
                  <TableCell className="tablecell">Customer</TableCell>
                  <TableCell className="tablecell">Date</TableCell>
                  <TableCell className="tablecell">Amount</TableCell>
                  <TableCell className="tablecell">Payment Method</TableCell>
                  <TableCell className="tablecell">Status</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map((row) => (
                  <TableRow key={row.id}>
                     <TableCell className="tablecell">{row.id}</TableCell>
                     <TableCell className="tablecell">
                        <div className="cellWrapper">
                           <img src={row.img} alt="" className="image" />
                           {row.product}
                        </div>
                     </TableCell>
                     <TableCell className="tablecell">{row.customer}</TableCell>
                     <TableCell className="tablecell">{row.date}</TableCell>
                     <TableCell className="tablecell">{row.amount}</TableCell>
                     <TableCell className="tablecell">{row.method}</TableCell>
                     <TableCell className="tablecell">
                        <span className={`status ${row.status}`}>
                           {row.status}
                        </span>
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
};

export default TableMU;
