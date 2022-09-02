import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FloorButton } from 'components/FloorButton';

const StageCompoent = dynamic(() => import('../components/StageComponent'), {
  ssr: false,
});

export type Floor = 1 | 2 | 3;

const KonvaPage = () => {
  const [floor, setFloor] = useState<Floor>(1);

  return (
    <>
      <main>
        <StageCompoent floor={floor} />
        <FloorButton floor={floor} setFloor={setFloor} />
      </main>
    </>
  );
};

export default KonvaPage;
