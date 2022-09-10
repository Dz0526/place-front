import {
  SetStateAction,
  Dispatch,
  createContext,
  useState,
  ReactNode,
} from 'react';

type Props = {
  children: ReactNode;
};

type FormUiContextState = {
  isFocusSearchInput: boolean;
  setIsFocusSearchInput: Dispatch<SetStateAction<boolean>>;
};

export const FormUiContext = createContext<FormUiContextState>({
  isFocusSearchInput: false,
  setIsFocusSearchInput: () => null,
});

export const FormUiContextProvider = ({ children }: Props) => {
  const [state, setState] = useState(false);

  return (
    <FormUiContext.Provider
      value={{ isFocusSearchInput: state, setIsFocusSearchInput: setState }}
    >
      {children}
    </FormUiContext.Provider>
  );
};
