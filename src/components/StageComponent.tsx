import { Stage, Layer } from 'react-konva';
import { MapImage } from './MapImage';
import { useState } from 'react';
import { KonvaEventObject } from 'konva/lib/Node';
import { MapPin } from './MapPin';
import { Club } from 'mock/api/club';
import { usePosition } from 'hooks/usePosition';

type Scale = {
  scaleX: number;
  scaleY: number;
};

type Props = {
  clubData: Club[];
};

const StageCompoent = ({ clubData }: Props) => {
  const [scale, setScale] = useState<Scale>({ scaleX: 1, scaleY: 1 });
  const [dis, setDis] = useState(0);
  const [isPinching, setIsPinching] = useState(false);
  const { position } = usePosition();

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
      draggable={isPinching ? false : true}
      x={position.search ? -1084 + window.innerWidth / 2 : 0}
      y={position.search ? -499 + window.innerHeight / 2 : 0}
    >
      <Layer>
        {position.floor === 1 ? (
          <MapImage alt='map floor 1' imageName='/map1.png' />
        ) : position.floor === 2 ? (
          <MapImage alt='map floor 2' imageName='/map2.png' />
        ) : (
          <MapImage alt='map floor 3' imageName='/map3.png' />
        )}
        {clubData
          .filter(club => club.floor === position.floor)
          .map(club => (
            <MapPin x={club.x} y={club.y} name={club.name} key={club.name} />
          ))}
      </Layer>
    </Stage>
  );
};

export default StageCompoent;
