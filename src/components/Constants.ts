export class Consts {
  readonly SCROLL_DIVIDER = 600;
}

// not use
export type ContainerType = {
  container_width: ContainerWidth;
  caption_flow: CaptionFlow;
  caption_position: CaptionPosition;
};

export enum ContainerWidth {
  Full,
  Half
}

export enum CaptionFlow {
  Row,
  Column
}

export enum CaptionPosition {
  Right,
  Left
}
