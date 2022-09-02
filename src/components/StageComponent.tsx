import { Stage, Layer } from 'react-konva';
import { MapImage } from './MapImage';
import { useState } from 'react';
import { KonvaEventObject } from 'konva/lib/Node';
import { MapPin } from './MapPin';
import { Floor } from 'pages/konva';

type Scale = {
  scaleX: number;
  scaleY: number;
};

type Props = {
  floor: Floor;
};

const StageCompoent = ({ floor }: Props) => {
  const [scale, setScale] = useState<Scale>({ scaleX: 1, scaleY: 1 });
  const [dis, setDis] = useState(0);
  const [isPinching, setIsPinching] = useState(false);

  const handleTouchMoveEvent = (e: KonvaEventObject<TouchEvent>) => {
    if (e.evt.changedTouches.length > 1) {
      setIsPinching(true);
      const disX =
        e.evt.changedTouches[1].clientX - e.evt.changedTouches[0].clientX;
      const disY =
        e.evt.changedTouches[1].clientY - e.evt.changedTouches[0].clientY;
      const curDis = Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2));

      let lastDis = dis;

      if (lastDis == 0) {
        lastDis = curDis;
      }

      const newScale: Scale = {
        scaleX: scale.scaleX * (curDis / lastDis),
        scaleY: scale.scaleY * (curDis / lastDis),
      };

      setScale(newScale);
      setDis(curDis);
    }
  };

  return (
    <div className='bg-black'>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onTouchMove={e => handleTouchMoveEvent(e)}
        onTouchEnd={() => {
          setDis(0);
          setIsPinching(false);
        }}
        scaleX={scale.scaleX}
        scaleY={scale.scaleY}
        draggable={isPinching ? false : true}
      >
        <Layer>
          {floor === 1 ? (
            <MapImage alt='map floor 1' imageName='/map1.png' />
          ) : floor === 2 ? (
            <MapImage alt='map floor 2' imageName='/map2.png' />
          ) : (
            <MapImage alt='map floor 3' imageName='/map3.png' />
          )}
          <MapPin x={956} y={736} />
        </Layer>
      </Stage>
    </div>
  );
};

export default StageCompoent;
