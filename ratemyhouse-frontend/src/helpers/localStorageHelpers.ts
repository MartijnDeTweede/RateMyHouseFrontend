export const writeCredentialsToSessionStorage = (credentials: {token: string, userName: string}) => {
  sessionStorage.setItem('rateMyHouseAuth', JSON.stringify(credentials));
}