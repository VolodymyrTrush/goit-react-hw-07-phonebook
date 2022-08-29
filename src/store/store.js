import { configureStore } from '@reduxjs/toolkit';
import filter from './Contacts/filterSlicer';
import { contactsApi } from './Contacts/contactsSlice';
import { middleware } from './middleware';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter,
  },

  middleware,
});
