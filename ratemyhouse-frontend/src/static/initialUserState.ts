import { UserState } from "../types/user.types";

export const initialUserState: UserState = {
  user: {
    userName: '',
    objectForSale: false,
    _id: '',
    contactInfo: {
      email: '',
      phoneNumber: '',
    },
    location: {
      street: '',
      city: '',
      houseNumber: 0,
      houseNumberAddition: '',
      county: '',
      postalCode: '',
    }
  },
  isFetching: false,
  message: undefined,
};
