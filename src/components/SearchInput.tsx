import { useFormUi } from 'hooks/useFormUi';
import { useKeyFoucsControl } from 'hooks/useKeyFoucsControl';
import { clubData } from 'mock/api/club';
import { useState } from 'react';

export const SearchInput = () => {
  const [clubName, setClubName] = useState('');
  const { refs, inputRef, register } = useKeyFoucsControl();
  const { isFocusSearchInput, setIsFocusSearchInput } = useFormUi();

  return (
    <div
      onKeyDown={e => {
        if (e.key == 'Escape') setIsFocusSearchInput(false);
      }}
    >
      <input
        className='border-gray-300 border-2  pb-2 pt-2 focus:bg-blue-10'
        type='search'
        placeholder='ここで検索'
        required
        value={clubName}
        onChange={e => {
          setClubName(e.target.value);
        }}
        list='club-list'
        onFocus={() => {
          setIsFocusSearchInput(true);
        }}
        onKeyDown={e => {
          if (e.key == 'ArrowDown') {
            e.preventDefault();
            refs.current[0].e.focus();
          }
        }}
        ref={inputRef}
      />
      {isFocusSearchInput && (
        <ul className='absolute z-10 bg-white divide-y-2 divide-slate-200 mt-3 rounded'>
          {clubData
            .filter(club =>
              clubName ? club.name.indexOf(clubName) == 0 : false,
            )
            .map((club, index) => (
              <li
                tabIndex={0}
                key={index}
                className={`pt-2 pl-2 pb-2 pr-10 focus:bg-blue-100 outline-blue-200`}
                {...register(index)}
              >
                {club.name}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
