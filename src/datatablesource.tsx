import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export const userColumns: GridColDef[] = [
   { field: "_id", headerName: "ID", width: 150 },
   {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params: GridValueGetterParams) => {
         return (
            <div className="cellWithImg">
               <img
                  src={
                     params.row.img ||
                     "http://www.losolivosbogota.com/sites/salas/pqrs/imagenes/sin_imagen.png"
                  }
                  alt=""
                  className="cellImg"
               />
               {params.row.username}
            </div>
         );
      },
   },
   { field: "email", headerName: "Email", width: 230 },
   { field: "country", headerName: "Country", width: 100 },
   { field: "city", headerName: "City", width: 100 },
   { field: "phone", headerName: "Phone", width: 100 },
];

export const hotelColumns: GridColDef[] = [
   { field: "_id", headerName: "ID", width: 150 },
   { field: "name", headerName: "Name", width: 100 },
   { field: "type", headerName: "Type", width: 100 },
   { field: "title", headerName: "Title", width: 100 },
   { field: "city", headerName: "City", width: 100 },
];

export const roomColumns: GridColDef[] = [
   { field: "_id", headerName: "ID", width: 150 },
   { field: "title", headerName: "Title", width: 100 },
   { field: "desc", headerName: "Description", width: 100 },
   { field: "price", headerName: "Price", width: 100 },
   { field: "maxPeople", headerName: "Max People", width: 100 },
];
