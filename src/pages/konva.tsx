import dynamic from 'next/dynamic';
import { FloorButton } from 'components/FloorButton';
import { clubData } from 'mock/api/club';

const StageCompoent = dynamic(() => import('../components/StageComponent'), {
  ssr: false,
});

export type Floor = 1 | 2 | 3;

const KonvaPage = () => {
  return (
    <>
      <main>
        <StageCompoent clubData={clubData} />
        <FloorButton />
      </main>
    </>
  );
};

export default KonvaPage;
