import { KonvaEventObject } from 'konva/lib/Node';
import { FC, useState } from 'react';
import { Image } from 'react-konva';
import useImage from 'use-image';

type Scale = {
  scaleX: number;
  scaleY: number;
};

type Props = {
  isPinching: boolean;
};

export const MapImage: FC<Props> = ({ isPinching }) => {
  const [image] = useImage('/map1.png');
  const [scale, setScale] = useState<Scale>({ scaleX: 1, scaleY: 1 });

  const handleWheelEvent = (e: KonvaEventObject<WheelEvent>) => {
    const scaleBy = 1.1;
    const newScale: Scale =
      e.evt.deltaY > 0
        ? { scaleX: scale.scaleX * scaleBy, scaleY: scale.scaleY * scaleBy }
        : { scaleX: scale.scaleX / scaleBy, scaleY: scale.scaleY / scaleBy };
    setScale(newScale);
  };

  return (
    <Image
      image={image}
      alt='map1'
      width={window.innerWidth}
      height={window.innerHeight}
      onWheel={e => handleWheelEvent(e)}
      draggable={isPinching ? false : true}
    />
  );
};
