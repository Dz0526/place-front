import dynamic from 'next/dynamic';

const StageCompoent = dynamic(() => import('../components/StageComponent'), {
  ssr: false,
});

const KonvaPage = () => {
  return <StageCompoent />;
};

export default KonvaPage;
