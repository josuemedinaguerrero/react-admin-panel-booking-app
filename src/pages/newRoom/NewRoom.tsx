import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import { roomInputs } from "../../formSource";
import { HotelModel } from "../../types/type";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./newRoom.scss";

const NewRoom = () => {
   const [info, setInfo] = useState<HotelModel>({} as HotelModel);
   const [hotelId, setHotelId] = useState<string>("");
   const [rooms, setRooms] = useState<string>("");

   const { data, loading } = useFetch(
      "https://booking-api-jos.herokuapp.com/api/hotels"
   );
   const hotelRes = data as HotelModel[];

   const navigate = useNavigate();

   const handleChange = (
      e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
   ) => {
      setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
   };

   const handleClick = async (
      e: React.MouseEvent<HTMLButtonElement, MouseEvent>
   ) => {
      e.preventDefault();
      const roomNumbers = rooms.split(",").map((room) => ({ number: room }));
      try {
         await axios.post(
            `https://booking-api-jos.herokuapp.com/api/rooms/${hotelId}`,
            {
               ...info,
               roomNumbers,
            }
         );
         navigate("/rooms");
      } catch (error) {}
   };

   return (
      <div className="newRoom">
         <Sidebar />
         <div className="newContainer">
            <Navbar />
            <div className="top">
               <h1>Add New Room</h1>
            </div>
            <div className="bottom">
               <div className="right">
                  <form>
                     {roomInputs.map((input) => (
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
                     <div className="formInput">
                        <label htmlFor="">Rooms</label>
                        <textarea
                           onChange={(e) => setRooms(e.target.value)}
                           placeholder="give comma between room numbers"
                           name=""
                           id=""
                        />
                     </div>
                     <div className="formInput">
                        <label htmlFor="">Choose a hotel</label>
                        <select
                           name=""
                           id="hotelId"
                           onChange={(e) => setHotelId(e.target.value)}
                        >
                           {loading
                              ? "loading"
                              : data &&
                                hotelRes.map((hotel) => (
                                   <option key={hotel._id} value={hotel._id}>
                                      {hotel.name}
                                   </option>
                                ))}
                        </select>
                     </div>
                     <button onClick={handleClick}>Send</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default NewRoom;
