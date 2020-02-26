export const getToken = (): string => {
  const sessionStorageData = sessionStorage.getItem("rateMyHouseAuth");
  const token = sessionStorageData ? JSON.parse(sessionStorageData).token : '';
  return token;
};