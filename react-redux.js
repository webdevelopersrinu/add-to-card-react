import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export function Provider({ store, children }) {
  const [state, setState] = useState(store.getState());
  store.subscribe(() => {
    setState(store.getState());
  });
  return (
    <StoreContext.Provider value={{ state, dispatch: state.dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}

export const useSelector = (selector) => {
  const store = useContext(StoreContext);
  return selector(store.state);
};
export const useDispatch = () => {
  const store = useContext(StoreContext);
  return store.dispatch;
};
