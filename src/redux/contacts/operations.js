// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { goitApi } from "../auth/operations";
// import { toast } from "react-hot-toast";
// export const fetchContacts = createAsyncThunk(
//   "contacts/tetchAll",
//   async (_, thunkAPI) => {
//     try {
//       const response = await goitApi.get("/contacts");
//       return response.data;
//     } catch (err) {
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   "contacts/addContact",
//   async (body, thunkAPI) => {
//     try {
//       const response = await goitApi.post("/contacts", body);
//       toast.success("Contact added!");
//       return response.data;
//     } catch (err) {
//       toast.error(`Failed to delete contact! ${err.message}`);
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   "contacts/deleteContact",
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await goitApi.delete(`/contacts/${contactId}`);
//       toast.success("Contact deleted!");
//       return response.data;
//     } catch (err) {
//       toast.error(`Failed to delete contact! ${err.message}`);
//       return thunkAPI.rejectWithValue(err.message);
//     }
//   }
// );

// export const updateContact = createAsyncThunk(
//   "contacts/updateContacts",
//   async ({ id, name, number }, thunkAPI) => {
//     try {
//       const { data } = await goitApi.patch(`/contacts/${id}`, { name, number });
//       toast.success("Contact updated succsessfully!");
//       return data;
//     } catch (error) {
//       toast.error("Failed to update contact!");
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
