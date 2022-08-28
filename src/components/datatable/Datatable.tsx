import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { UserModel } from "../../types/type";
import axios, { AxiosError } from "axios";
import "./datatable.scss";

const Datatable = ({ columns }: any) => {
   const location = useLocation();
   const path = location.pathname.split("/")[1];
   const { data } = useFetch(
      `https://booking-api-jos.herokuapp.com/api/${path}`
   );
   const [list, setList] = useState([] as UserModel[]);

   useEffect(() => {
      const dataRes = data as unknown as UserModel[];
      setList(dataRes);
   }, [data]);

   const handleDelete = async (id: string) => {
      try {
         await axios.delete(
            `https://booking-api-jos.herokuapp.com/api/${path}/${id}`
         );
         setList(list.filter((item) => item._id !== id));
      } catch (error) {
         const err = error as AxiosError;
         console.log(err.response?.data);
      }
   };

   const actionColumn: GridColDef[] = [
      {
         field: "action",
         headerName: "Action",
         width: 200,
         renderCell: (params: GridValueGetterParams) => {
            return (
               <div className="cellAction">
                  <Link to="/users/test" style={{ textDecoration: "none" }}>
                     <div className="viewButton">View</div>
                  </Link>
                  <div
                     className="deleteButton"
                     onClick={() => handleDelete(params.row._id)}
                  >
                     Delete
                  </div>
               </div>
            );
         },
      },
   ];

   return (
      <div className="datatable">
         <div className="datatableTitle">
            {path}
            <Link to={`/${path}/new`} className="link">
               Add New
            </Link>
         </div>
         <DataGrid
            className="datagrid"
            rows={list}
            columns={columns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            getRowId={(row) => row._id}
         />
      </div>
   );
};

export default Datatable;
