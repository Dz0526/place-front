import { Floor } from 'pages/konva';
import { SetStateAction, Dispatch } from 'react';

type Props = {
  floor: Floor;
  setFloor: Dispatch<SetStateAction<Floor>>;
};

export const FloorButton = ({ floor, setFloor }: Props) => {
  const floorNumbers: Floor[] = [1, 2, 3];

  return (
    <p className='absolute bottom-0 right-0'>
      {floorNumbers.map(num => (
        <button
          className={`p-3 text-5xl ${
            floor !== num && 'hover:text-blue-300 hover:text-7xl'
          } ${floor === num && 'text-slate-200'}`}
          disabled={floor === num}
          key={num}
          value={num}
          onClick={e => setFloor(num)}
        >
          {num}
        </button>
      ))}
    </p>
  );
};
