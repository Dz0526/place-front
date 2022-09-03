import { Position } from 'mock/api/club';
import { Floor } from 'pages/konva';
import { createContext, Dispatch, ReactNode, useReducer, Reducer } from 'react';

type Props = {
  children: ReactNode;
};

type ACTION =
  | {
      type: 'CHANGE_FLOOR';
      payload: Floor;
    }
  | {
      type: 'SET_POSITION';
      payload: Position;
    };

const reducerFunc: Reducer<Position, ACTION> = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FLOOR':
      return { ...state, floor: action.payload };
    case 'SET_POSITION':
      return action.payload;
  }
};

type PositionContextState = {
  position: Position;
  dispatch: Dispatch<ACTION>;
};

export const PositionContext = createContext<PositionContextState>({
  position: { x: 0, y: 0, floor: 1, search: false },
  dispatch: () => null,
});

export const PositionContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducerFunc, {
    x: 0,
    y: 0,
    floor: 1,
    search: false,
  });

  return (
    <PositionContext.Provider value={{ position: state, dispatch: dispatch }}>
      {children}
    </PositionContext.Provider>
  );
};
