export interface User {
  userName: string;
  _id: string;
  objectStatus: string;
  contactInfo: {
    email: string;
    phoneNumber: string;
  };
  location: {
    postalCode: string;
    city: string;
    county: string;
    street: string;
    houseNumber: number;
    houseNumberAddition: string;
  }
};

export interface UserState {
  user: User,
  isFetching: boolean,
  message?: string;
}