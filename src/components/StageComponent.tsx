import { FC } from 'react';
import { Stage, Layer } from 'react-konva';
import { MapImage } from './MapImage';
import { useState } from 'react';
import { KonvaEventObject } from 'konva/lib/Node';

type Scale = {
  scaleX: number;
  scaleY: number;
};

const StageCompoent: FC = () => {
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
    >
      <Layer>
        <MapImage isPinching={isPinching} />
      </Layer>
    </Stage>
  );
};

export default StageCompoent;
