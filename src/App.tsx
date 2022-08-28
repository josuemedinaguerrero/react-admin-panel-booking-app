import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";
import { useAuth } from "./hooks/useAuth";
import { useDarkMode } from "./hooks/useDarkMode";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import NewHotel from "./pages/newHotel/NewHotel";
import NewRoom from "./pages/newRoom/NewRoom";
import Single from "./pages/single/Single";
import "./style/dark.scss";

function App() {
   const { darkMode } = useDarkMode();

   const ProtectedRoute = ({ children }: any) => {
      const { user } = useAuth();
      if (!user.username) {
         return <Navigate to="/login" />;
      }
      return children;
   };

   return (
      <div className={`app ${darkMode ? "dark" : ""}`}>
         <BrowserRouter>
            <Routes>
               <Route path="/">
                  <Route
                     index
                     element={
                        <ProtectedRoute>
                           <Home />
                        </ProtectedRoute>
                     }
                  />
                  <Route path="login" element={<Login />} />
                  <Route path="users">
                     <Route
                        index
                        element={
                           <ProtectedRoute>
                              <List columns={userColumns} />
                           </ProtectedRoute>
                        }
                     />
                     <Route
                        path=":userId"
                        element={
                           <ProtectedRoute>
                              <Single />
                           </ProtectedRoute>
                        }
                     />
                     <Route
                        path="new"
                        element={
                           <ProtectedRoute>
                              <New />
                           </ProtectedRoute>
                        }
                     />
                  </Route>
                  <Route path="hotels">
                     <Route
                        index
                        element={
                           <ProtectedRoute>
                              <List columns={hotelColumns} />
                           </ProtectedRoute>
                        }
                     />
                     <Route
                        path=":productId"
                        element={
                           <ProtectedRoute>
                              <Single />
                           </ProtectedRoute>
                        }
                     />
                     <Route
                        path="new"
                        element={
                           <ProtectedRoute>
                              <NewHotel />
                           </ProtectedRoute>
                        }
                     />
                  </Route>
                  <Route path="rooms">
                     <Route
                        index
                        element={
                           <ProtectedRoute>
                              <List columns={roomColumns} />
                           </ProtectedRoute>
                        }
                     />
                     <Route
                        path=":productId"
                        element={
                           <ProtectedRoute>
                              <Single />
                           </ProtectedRoute>
                        }
                     />
                     <Route
                        path="new"
                        element={
                           <ProtectedRoute>
                              <NewRoom />
                           </ProtectedRoute>
                        }
                     />
                  </Route>
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;

