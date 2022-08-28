import { NewInputs } from "./types/type";

export const userImputs: NewInputs[] = [
   {
      id: "username",
      label: "Username",
      type: "text",
      placeholder: "test1",
   },
   {
      id: "password",
      label: "Password",
      type: "password",
   },
   {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "test1@test.com",
   },
   {
      id: "phone",
      label: "Phone",
      type: "text",
      placeholder: "+000 00000000",
   },
   {
      id: "city",
      label: "City",
      type: "text",
      placeholder: "",
   },
   {
      id: "country",
      label: "Country",
      type: "text",
      placeholder: "",
   },
];

export const hotelInputs: NewInputs[] = [
   {
      id: "name",
      label: "Name",
      type: "text",
      placeholder: "My Hotel",
   },
   {
      id: "type",
      label: "Type",
      type: "text",
      placeholder: "hotel",
   },
   {
      id: "city",
      label: "City",
      type: "text",
      placeholder: "New York",
   },
   {
      id: "address",
      label: "Address",
      type: "text",
      placeholder: "elton st, 216",
   },
   {
      id: "distance",
      label: "Distance from City Center",
      type: "text",
      placeholder: "500",
   },
   {
      id: "title",
      label: "Title",
      type: "text",
      placeholder: "The best Hotel",
   },
   {
      id: "desc",
      label: "Description",
      type: "text",
      placeholder: "description",
   },
   {
      id: "cheapesPrice",
      label: "Price",
      type: "text",
      placeholder: "100",
   },
];

export const roomInputs: NewInputs[] = [
   {
      id: "title",
      label: "Title",
      type: "text",
      placeholder: "2 bed room",
   },
   {
      id: "desc",
      label: "Description",
      type: "text",
      placeholder: "King size bed, 1 bathroom",
   },
   {
      id: "price",
      label: "Price",
      type: "number",
      placeholder: "100",
   },
   {
      id: "maxPeople",
      label: "Max People",
      type: "number",
      placeholder: "2",
   },
];
