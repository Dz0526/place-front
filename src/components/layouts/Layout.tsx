import { ReactElement } from 'react';

type Props = {
  children: ReactElement;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <header>
        <h1>Place</h1>
      </header>
      {children}
      <footer>
        <p>copyright: 4I team 4</p>
      </footer>
    </>
  );
};
