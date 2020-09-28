import React, { createContext, useContext, useState } from "react";

// Instead of Redux for global application state, we're using
//  a super simple react context, nothing more.

// This will be less efficient, but also easier to work with
//  as long as the app doesn't grow super big.

// Also, fetching data from the API, and posting to it, is delegated
//  to the library `react-query`, instead of using e.g. thunks
//  in the global application state store. See `app/lib/api.tsx`.

type AppState = {
  auth: null | {
    email: string;
    name: string;
    token: string;
  };
};

const AppStateContext = createContext<{
  state: AppState;
  setState: React.Dispatch<AppState>;
}>(null as any);

export function AppStateProvider({ children }: { children?: React.ReactNode }) {
  const [state, setState] = useState<AppState>(() => {
    return { auth: null };
  });

  return (
    <AppStateContext.Provider value={{ state, setState }}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState<T = AppState>(selector?: (state: AppState) => T) {
  const { state } = useContext(AppStateContext);
  return selector ? selector(state) : state;
}

export function useSetAppState() {
  return useContext(AppStateContext).setState;
}
