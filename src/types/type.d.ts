// TODO: Models

// TODO: User Model

export interface UserModel {
   _id: string;
   username: string;
   password: string;
   email: string;
   country: string;
   img: string;
   city: string;
   phone: string;
}

// TODO: Hotel Model

export interface HotelModel {
   _id: string;
   name: string;
   type: string;
   city: string;
   photos: string[];
   address: string;
   distance: string;
   title: string;
   desc: string;
   cheapesPrice: number;
}

// TODO: Room Model

export interface RoomModel {
   _id: string;
   title: string;
   price: number;
   maxPeople: number;
   desc: string;
   roomNumbers: Array<{
      number: number;
      unavailableDates: Array<Date>;
   }>;
}

// TODO: Auth Context

export interface AuthProv {
   user: UserModel;
   loading: boolean;
   error: {
      message: string;
      stack: string;
      status: number;
      success: boolean;
   };
   dispatch?: React.Dispatch<AuthAction>;
}

type AuthInterface = Omit<AuthProv, "dispatch">;

type AuthAction =
   | { type: "LOGIN_START" }
   | { type: "LOGIN_SUCCESS"; payload: UserModel }
   | {
        type: "LOGIN_FAILURE";
        payload: {
           message: string;
           stack: string;
           status: number;
           success: boolean;
        };
     }
   | { type: "LOGOUT" };

// TODO: Search Context

export interface SearchProv {
   city: string;
   dates: [
      {
         startDate: Date;
         endDate: Date;
         key: string;
      }
   ];
   options: {
      adult: number;
      children: number;
      room: number;
   };
   dispatch?: React.Dispatch<SearchAction>;
}

type SearchInterface = Omit<SearchProv, "dispatch">;

type SearchAction =
   | { type: "NEW_SEARCH"; payload: SearchInterface }
   | { type: "RESET_SEARCH" };

// TODO: Children

export interface ChildrenProps {
   children: JSX.Element | JSX.Element[];
}

// TODO: Inputs

export interface NewInputs {
   id: string;
   label: string;
   type: string;
   placeholder?: string;
}

// TODO: Dark Mode

export type DarkModeAction =
   | { type: "LIGHT" }
   | { type: "DARK" }
   | { type: "TOOGLE" };

export interface DarkMode {
   darkMode: boolean;
}

// TODO: Login

export interface UserLogin {
   username: string;
   password: string;
}

// TODO: Error Auth

export interface ErrorAuth {
   message: string;
   stack: string;
   status: number;
   success: boolean;
}
