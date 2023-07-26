export interface appState {
  language: string;
  channels: Object;
  tabs: Array<any>;
  newsStoreData: Object;
  onNewsPressCount: any;
  onExpandDetail: any;
  isRatingDialogVisible: boolean;
  onSwipe: any;
  currentRoute: string;
}

export interface responseAction {
  type: string;
  payload: any;
}
