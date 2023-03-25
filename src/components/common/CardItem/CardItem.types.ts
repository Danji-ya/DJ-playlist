import { IMusic } from '../../../@types/music';

export interface Props {
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLLIElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLLIElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLLIElement>) => void;
  idx?: number;
  children: React.ReactNode;
}

export interface TumbnailProps {
  item: IMusic;
  onClick: (music: IMusic) => void;
  rounded?: boolean;
  url: string;
}

export type BodyProps = Pick<Props, 'children'>;
export type TitleProps = Pick<Props, 'children'>;
export type SubTitleProps = Pick<Props, 'children'>;
