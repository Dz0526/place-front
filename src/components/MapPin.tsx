import { Star, Wedge } from 'react-konva';

type Props = {
  x: number;
  y: number;
};

export const MapPin = ({ x, y }: Props) => {
  return (
    <>
      <Star
        numPoints={5}
        stroke='skyblue'
        strokeWidth={3}
        innerRadius={5}
        outerRadius={10}
        x={x}
        y={y}
      />
      <Wedge
        angle={20}
        radius={15}
        fill='skyblue'
        x={x}
        y={y + 28}
        rotationDeg={260}
      />
    </>
  );
};
