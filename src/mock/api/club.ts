import { Floor } from 'pages/konva';

export type Club = {
  name: string;
  x: number;
  y: number;
  floor: Floor;
};

export const clubData: Club[] = [
  { name: 'コンピュータ部', x: 1084, y: 499, floor: 1 },
  { name: '美術部', x: 1293, y: 501, floor: 1 },
  { name: '鉄道部', x: 1425, y: 807, floor: 1 },
  { name: '自動車部', x: 1025, y: 775, floor: 1 },
  { name: 'ロボコンA', x: 958, y: 782, floor: 1 },
  { name: 'ロボコンB', x: 1599, y: 528, floor: 1 },
];