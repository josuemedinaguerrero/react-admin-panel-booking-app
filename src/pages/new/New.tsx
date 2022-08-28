import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserModel } from "../../types/type";
import { userImputs } from "../../formSource";
import axios from "axios";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./new.scss";

const New = () => {
   const [file, setFile] = useState() as any;
   const [info, setInfo] = useState<UserModel>({} as UserModel);
   const navigate = useNavigate();

   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
   };

   const handleClick = async (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      e.preventDefault();
      const data = new FormData();
      data.append("file", file);
      data.append("upload_preset", "upload");
      try {
         const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/duyclt9ly/image/upload",
            data
         );
         const { secure_url } = uploadRes.data;
         const newUser = {
            ...info,
            img: secure_url,
         };
         await axios.post(
            "https://booking-api-jos.herokuapp.com/api/auth/register",
            newUser
         );
         navigate("/users");
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div className="new">
         <Sidebar />
         <div className="newContainer">
            <Navbar />
            <div className="top">
               <h1>Add New User</h1>
            </div>
            <div className="bottom">
               <div className="left">
                  <img
                     src={
                        file
                           ? URL.createObjectURL(file)
                           : "data:image/png;base64,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"
                     }
                     alt=""
                  />
               </div>
               <div className="right">
                  <form>
                     <div className="formInput">
                        <label htmlFor="file">
                           Image: <FileUploadIcon className="icon" />
                        </label>
                        <input
                           type="file"
                           style={{ display: "none" }}
                           id="file"
                           onChange={(e) => setFile(e.target.files![0])}
                        />
                     </div>
                     {userImputs.map((input) => (
                        <div className="formInput" key={input.id}>
                           <label htmlFor="">{input.label}</label>
                           <input
                              type={input.type}
                              placeholder={input.placeholder}
                              onChange={handleChange}
                              id={input.id}
                           />
                        </div>
                     ))}
                     <button onClick={handleClick}>Send</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default New;
