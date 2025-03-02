export interface IToast {
  title: string;
  message: string;
  duration?: number;
  type?: 'success' | 'error' | 'info';
}

export interface IToastState extends IToast {
  id: string;
}
