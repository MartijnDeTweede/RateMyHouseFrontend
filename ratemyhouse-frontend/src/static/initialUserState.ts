import { UserState } from "../types/user.types";
import { objectStatus } from "../types/objectStatus.enum";

export const initialUserState: UserState = {
  user: {
    userName: '',
    objectStatus: objectStatus.notForSale,
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
