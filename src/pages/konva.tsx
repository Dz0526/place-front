import dynamic from 'next/dynamic';

const StageCompoent = dynamic(() => import('../components/StageComponent'), {
  ssr: false,
});

const KonvaPage = () => {
  return (
    <>
      <main>
        <StageCompoent />
      </main>
    </>
  );
};

export default KonvaPage;
