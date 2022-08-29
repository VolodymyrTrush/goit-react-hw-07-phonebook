import { contactsApi } from './Contacts/contactsSlice';

export const  middleware = getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ]
  