export const writeCredentialsToSessionStorage = (credentials: {token: string, userName: string}) => {
  sessionStorage.setItem('rateMyHouseAuth', JSON.stringify(credentials));
}

export const removeCredialsFromSessionStorage = (keyName: string) => (sessionStorage.removeItem(keyName));