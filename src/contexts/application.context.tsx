import React, { useContext, useEffect, useState } from 'react';
import Storage from '../modules/Storage';
import { GetApplicationTokenService } from '../services';

export interface IApplicationProviderProps {
  children?: React.ReactNode;
}
export interface IApplicationContext {
  token?: string;
  setToken(token: string): void;
}

export const ApplicationContext = React.createContext<IApplicationContext>({
  token: undefined,
  setToken: () => undefined,
});

interface IResponseType {
  access_token: string;
}

export const useApplicationContext = () => useContext(ApplicationContext);

export default function ApplicationProvider({
  children,
}: IApplicationProviderProps) {
  const [appToken, setAppToken] = useState<string | undefined>(undefined);
  useEffect(() => {
    const auth = Storage.get('token_site');

    if (auth) {
      setAppToken(auth);
    } else {
      GetApplicationTokenService.post().then((response: unknown) => {
        const { access_token: token } = response as IResponseType;
        Storage.set('token_site', token);
        setAppToken(token);
      });
    }
  }, []);

  const setToken = (token: string) => {
    setAppToken(token);
  };
  return (
    <>
      <ApplicationContext.Provider
        value={{
          setToken,
          token: appToken,
        }}
      >
        {children}
      </ApplicationContext.Provider>
    </>
  );
}
