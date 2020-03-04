import { UserState } from "../containers/UserContainer";

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
};
