export interface User {
  userName: string;
  _id: string;
  objectForSale: boolean;
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
}