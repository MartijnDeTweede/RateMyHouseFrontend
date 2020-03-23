import { objectStatus } from '../types/objectStatus.enum';

const objectStatusOptions = [
  {
    title: objectStatus.forSale,
    value: "forSale",
  },
  {
    title: objectStatus.notForSale,
    value: "notForSale",
  },
  {
    title: objectStatus.forRent,
    value: "forRent",
  },
  {
    title: objectStatus.sold,
    value: "sold",
  },
  {
    title: objectStatus.rented,
    value: "rented",
  }
];

export default objectStatusOptions;