import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { usePosition } from 'hooks/usePosition';
import { positionDataTwo } from 'mock/api/club';
import { SearchInput } from 'components/SearchInput';
import { useFormUi } from 'hooks/useFormUi';

type Props = {
  children: ReactElement;
};

export const Layout = ({ children }: Props) => {
  const { dispatch } = usePosition();
  const { setIsFocusSearchInput } = useFormUi();

  return (
    <div onMouseDown={() => setIsFocusSearchInput(false)}>
      <header className='p-5 flex'>
        <h1 className='text-3xl font-bold font-red italic grow'>Place</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            dispatch({ type: 'SET_POSITION', payload: { ...positionDataTwo } });
            return;
          }}
          className='relative grow-0'
        >
          <SearchInput />
          <button type='submit' className='absolute inset-y-0 right-0 pr-2'>
            <FontAwesomeIcon
              className='hover:text-blue-300'
              icon={faMagnifyingGlass}
            />
          </button>
        </form>
      </header>
      {children}
      <footer className='text-center'>
        <p>Copyright © 4I team 4</p>
      </footer>
    </div>
  );
};
