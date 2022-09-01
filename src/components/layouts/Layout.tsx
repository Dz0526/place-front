import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

type Props = {
  children: ReactElement;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header className='p-5 flex'>
        <h1 className='text-3xl font-bold font-red italic grow'>Place</h1>
        <form method='get' className='relative grow-0'>
          <input
            className='rounded border-gray-300 border-2  pb-2 pt-2'
            type='search'
            placeholder='ここで検索'
            required
          />
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
    </>
  );
};
