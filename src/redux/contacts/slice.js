// import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
// import {
//   addContact,
//   deleteContact,
//   fetchContacts,
//   updateContact,
// } from "../contacts/operations";
// import { selectContacts } from "../contacts/selectors";
// import { selectedNameFilter } from "../filters/selectors";
// import { logOut } from "../auth/operations";

// const initialState = {
//   items: [],
//   isLoading: false,
//   isError: null,
// };

// const contactSlice = createSlice({
//   name: "contacts",
//   initialState,
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchContacts.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = null;
//         state.items = action.payload;
//       })
//       .addCase(addContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = null;
//         state.items.push(action.payload);
//       })
//       .addCase(deleteContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.isError = null;
//         const index = state.items.findIndex(
//           (item) => item.id === action.payload.id
//         );

//         state.items.splice(index, 1);
//       })
//       .addCase(logOut.fulfilled, (state) => {
//         state.items = [];
//         state.isError = null;
//         state.isLoading = false;
//       })
//       .addCase(updateContact.fulfilled, (state, action) => {
//         state.isLoading = false;
//         const index = state.items.findIndex(
//           (contact) => contact.id === action.payload.id
//         );
//         if (index !== -1) {
//           state.items[index] = action.payload;
//         }
//       })
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.pending,
//           addContact.pending,
//           deleteContact.pending,
//           updateContact.pending
//         ),
//         (state) => {
//           state.isLoading = true;
//         }
//       )
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.fulfilled,
//           addContact.fulfilled,
//           addContact.fulfilled,
//           updateContact.fulfilled
//         ),
//         (state) => {
//           state.isLoading = false;
//         }
//       )
//       .addMatcher(
//         isAnyOf(
//           fetchContacts.rejected,
//           addContact.rejected,
//           deleteContact.rejected,
//           updateContact.rejected
//         ),
//         (state, action) => {
//           state.isLoading = false;
//           state.isError = action.payload;
//         }
//       );
//   },
// });

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectedNameFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase().trim();
//     return contacts.filter(
//       ({ name, number }) =>
//         name.toLowerCase().trim().includes(normalizedFilter) ||
//         number.includes(normalizedFilter)
//     );
//   }
// );

// export const contactReducer = contactSlice.reducer;
